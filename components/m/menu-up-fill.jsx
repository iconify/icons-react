import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vphtn-bck.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vphtn-bck"/>`,
		"fallback": "memory:menu-up-fill",
	});
}

export default Component;
