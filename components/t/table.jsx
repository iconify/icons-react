import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hixq24oop.css';

const viewBox = {"width":717,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hixq24oop"/>`,
		"fallback": "ls:table",
	});
}

export default Component;
