import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egi7t0uie.css';
import '../../css/v/vnh2invat.css';
import '../../css/i/ixbj2wbiv.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egi7t0uie"/><path class="vnh2invat"/><path class="ixbj2wbiv"/><path class="a23i8nphm"/>`,
		"fallback": "fxemoji:nomobilephones",
	});
}

export default Component;
