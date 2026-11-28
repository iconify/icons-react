import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnb4t44ek.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnb4t44ek"/>`,
		"fallback": "pinhead:spray-to-cup-from-dispensing-machine-with-drink-cup-with-straw",
	});
}

export default Component;
