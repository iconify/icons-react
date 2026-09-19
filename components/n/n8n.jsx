import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_pl-mkf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="we_pl-mkf"/>`,
		"fallback": "devicon:n8n",
	});
}

export default Component;
