import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzqj8o9cj.css';
import '../../css/v/v8rh_m67z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzqj8o9cj"/><path class="v8rh_m67z"/>`,
		"fallback": "energy-icons:protractor-48",
	});
}

export default Component;
