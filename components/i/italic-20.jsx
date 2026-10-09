import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjqwoqbfe.css';
import '../../css/f/fxdh-t-8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjqwoqbfe"/><path class="fxdh-t-8i"/>`,
		"fallback": "energy-icons:italic-20",
	});
}

export default Component;
