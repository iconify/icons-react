import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4nexqbxr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4nexqbxr"/>`,
		"fallback": "gis:poi-favorite-o",
	});
}

export default Component;
