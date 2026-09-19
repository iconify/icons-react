import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8lam-buj.css';
import '../../css/c/cyt_a1kut.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8lam-buj"/><path class="cyt_a1kut"/>`,
		"fallback": "gis:regular-shape-pt",
	});
}

export default Component;
