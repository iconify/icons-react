import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do0i9ubhw.css';
import '../../css/s/so-0z5bnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do0i9ubhw"/><path class="so-0z5bnb"/>`,
		"fallback": "energy-icons:sand-battery-48-bold",
	});
}

export default Component;
