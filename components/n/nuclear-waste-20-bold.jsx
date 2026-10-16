import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs-k6d3fm.css';
import '../../css/c/c1--uvb0p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs-k6d3fm"/><path class="c1--uvb0p"/>`,
		"fallback": "energy-icons:nuclear-waste-20-bold",
	});
}

export default Component;
