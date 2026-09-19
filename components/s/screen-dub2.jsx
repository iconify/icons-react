import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzc9eyb8n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzc9eyb8n"/>`,
		"fallback": "gis:screen-dub2",
	});
}

export default Component;
