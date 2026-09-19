import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5zpfkb7z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5zpfkb7z"/>`,
		"fallback": "devicon-plain:pug",
	});
}

export default Component;
