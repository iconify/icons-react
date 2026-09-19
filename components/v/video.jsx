import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k26wlw6el.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k26wlw6el"/>`,
		"fallback": "fa-solid:video",
	});
}

export default Component;
