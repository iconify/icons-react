import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbapnjbsw.css';
import '../../css/y/y8qqoxbhq.css';
import '../../css/e/e5uqx_bmc.css';
import '../../css/v/v0sd4zb-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbapnjbsw"/><path class="y8qqoxbhq"/><path class="e5uqx_bmc"/><path class="v0sd4zb-w"/>`,
		"fallback": "material-icon-theme:svgr",
	});
}

export default Component;
