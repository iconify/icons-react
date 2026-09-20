import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxccggbmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxccggbmv"/>`,
		"fallback": "selfhst:tandoor-recipes-light",
	});
}

export default Component;
