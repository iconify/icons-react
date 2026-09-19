import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1gavvj8n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1gavvj8n"/>`,
		"fallback": "gis:measure-line",
	});
}

export default Component;
