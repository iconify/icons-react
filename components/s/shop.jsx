import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed-s9pbux.css';

const viewBox = {"width":1664,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed-s9pbux"/>`,
		"fallback": "vs:shop",
	});
}

export default Component;
