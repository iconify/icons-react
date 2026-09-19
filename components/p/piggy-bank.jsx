import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah0ggz9pe.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah0ggz9pe"/>`,
		"fallback": "fa-solid:piggy-bank",
	});
}

export default Component;
