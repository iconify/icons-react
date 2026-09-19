import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0fnm1bny.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0fnm1bny"/>`,
		"fallback": "fa-regular:object-ungroup",
	});
}

export default Component;
