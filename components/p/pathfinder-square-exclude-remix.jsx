import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqvup9b7k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gqvup9b7k"/>`,
		"fallback": "streamline:pathfinder-square-exclude-remix",
	});
}

export default Component;
