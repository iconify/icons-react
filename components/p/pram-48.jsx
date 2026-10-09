import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7_qae23k.css';
import '../../css/h/hpgxxvkzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7_qae23k"/><path class="hpgxxvkzd"/>`,
		"fallback": "energy-icons:pram-48",
	});
}

export default Component;
