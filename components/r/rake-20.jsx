import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td9q1sb4m.css';
import '../../css/r/r74_arb3k.css';
import '../../css/m/m-5l6lb7i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td9q1sb4m"/><path class="r74_arb3k"/><path class="m-5l6lb7i"/>`,
		"fallback": "energy-icons:rake-20",
	});
}

export default Component;
