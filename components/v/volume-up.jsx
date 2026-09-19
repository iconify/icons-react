import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-cu9tb2j.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-cu9tb2j"/>`,
		"fallback": "fa-solid:volume-up",
	});
}

export default Component;
