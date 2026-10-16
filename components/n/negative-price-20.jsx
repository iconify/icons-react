import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6og01bov.css';
import '../../css/r/riwyopb4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6og01bov"/><path class="riwyopb4m"/>`,
		"fallback": "energy-icons:negative-price-20",
	});
}

export default Component;
