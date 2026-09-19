import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruf9kkree.css';
import '../../css/n/n0nc54wee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruf9kkree"/><path class="n0nc54wee"/>`,
		"fallback": "famicons:power",
	});
}

export default Component;
