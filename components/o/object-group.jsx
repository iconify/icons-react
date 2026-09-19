import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyh-60p9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyh-60p9z"/>`,
		"fallback": "fa-solid:object-group",
	});
}

export default Component;
