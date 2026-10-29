import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mrtrwabef.css';
import '../../css/m/m0xezd38o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mrtrwabef"/><path class="m0xezd38o"/></g>`,
		"fallback": "withicons:parentheses-sketch",
	});
}

export default Component;
