import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt3s35byo.css';
import '../../css/u/uby7xibdw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt3s35byo"/><path class="uby7xibdw"/>`,
		"fallback": "energy-icons:rupee-20-bold",
	});
}

export default Component;
