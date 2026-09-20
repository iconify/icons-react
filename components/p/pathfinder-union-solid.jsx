import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs5vxub9k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gs5vxub9k"/>`,
		"fallback": "streamline:pathfinder-union-solid",
	});
}

export default Component;
