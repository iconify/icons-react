import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9x3on9_b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9x3on9_b"/>`,
		"fallback": "pinhead:pickleball-paddle-with-ball",
	});
}

export default Component;
