import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldnn-kber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldnn-kber"/>`,
		"fallback": "fa6-solid:user-large",
	});
}

export default Component;
