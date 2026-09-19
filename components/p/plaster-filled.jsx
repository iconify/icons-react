import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axi7sujok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axi7sujok"/>`,
		"fallback": "griddy-icons:plaster-filled",
	});
}

export default Component;
