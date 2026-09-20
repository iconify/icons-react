import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/e/ehl_mhm4d.css';
import '../../css/a/af8r2mb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="ehl_mhm4d"/><path class="af8r2mb5r"/></g>`,
		"fallback": "lets-icons:time-duotone-line",
	});
}

export default Component;
