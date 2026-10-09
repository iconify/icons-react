import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-7ml0b5j.css';
import '../../css/z/z1gk-qo7k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-7ml0b5j"/><path class="z1gk-qo7k"/>`,
		"fallback": "energy-icons:sofa-20-bold",
	});
}

export default Component;
