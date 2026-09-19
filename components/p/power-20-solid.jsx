import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fob5qsb3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fob5qsb3j"/>`,
		"fallback": "heroicons:power-20-solid",
	});
}

export default Component;
