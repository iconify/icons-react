import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5b5ebbiz.css';
import '../../css/z/zrqjhsbzn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5b5ebbiz"/><path class="zrqjhsbzn"/>`,
		"fallback": "streamline:shopping-catergories-dress-clothing-dress-skirt-women",
	});
}

export default Component;
