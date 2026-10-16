import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2eib-bha.css';
import '../../css/g/gsrfvdbyy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2eib-bha"/><path class="gsrfvdbyy"/>`,
		"fallback": "energy-icons:voltage-high-20-bold",
	});
}

export default Component;
