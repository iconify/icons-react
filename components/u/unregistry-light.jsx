import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho15aj4xr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho15aj4xr"/>`,
		"fallback": "selfhst:unregistry-light",
	});
}

export default Component;
