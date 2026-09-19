import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx9tb8boy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dx9tb8boy"/>`,
		"fallback": "glyphs:route-outline",
	});
}

export default Component;
