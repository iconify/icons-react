import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg1s3861r.css';

const viewBox = {"width":83,"height":82};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rg1s3861r"/>`,
		"fallback": "glyphs:puzzle-piece-bold",
	});
}

export default Component;
