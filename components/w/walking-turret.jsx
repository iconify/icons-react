import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjuvn4bhx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjuvn4bhx"/>`,
		"fallback": "game-icons:walking-turret",
	});
}

export default Component;
