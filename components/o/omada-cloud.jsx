import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfg_v3xsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfg_v3xsc"/>`,
		"fallback": "thesvg-color:omada-cloud",
	});
}

export default Component;
