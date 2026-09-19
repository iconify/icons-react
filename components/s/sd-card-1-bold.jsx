import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_kk4nbvj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_kk4nbvj"/>`,
		"fallback": "glyphs:sd-card-1-bold",
	});
}

export default Component;
