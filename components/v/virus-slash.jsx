import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkyqy-baq.css';
import '../../css/t/t4ulnobzr.css';
import '../../css/y/yq1nwtbah.css';
import '../../css/h/huqwiacxb.css';
import '../../css/k/kx-_22blo.css';
import '../../css/i/ien2smbtx.css';
import '../../css/k/km0_-5boi.css';
import '../../css/d/d6p324bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bkyqy-baq"/><circle class="t4ulnobzr"/><path class="yq1nwtbah"/><path class="huqwiacxb"/><path class="kx-_22blo"/><path class="ien2smbtx"/><path class="km0_-5boi"/><path class="d6p324bmn"/>`,
		"fallback": "uim:virus-slash",
	});
}

export default Component;
