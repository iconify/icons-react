import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z53lt7bqm.css';
import '../../css/u/ul7690b-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z53lt7bqm"/><path class="ul7690b-t"/>`,
		"fallback": "energy-icons:text-color-20-bold",
	});
}

export default Component;
