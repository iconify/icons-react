import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cauiu9xcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cauiu9xcp"/>`,
		"fallback": "thesvg-color:traefik-mesh",
	});
}

export default Component;
