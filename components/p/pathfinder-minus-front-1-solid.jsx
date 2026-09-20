import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmjsnoi5d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmjsnoi5d"/>`,
		"fallback": "streamline:pathfinder-minus-front-1-solid",
	});
}

export default Component;
