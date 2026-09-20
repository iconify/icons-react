import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpglke3oj.css';
import '../../css/z/zztr2aboi.css';
import '../../css/y/yvm4rmb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tpglke3oj"/><path class="zztr2aboi"/><path class="yvm4rmb-d"/></g>`,
		"fallback": "tabler:photo-pentagon",
	});
}

export default Component;
