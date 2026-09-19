import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3x_etbqz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3x_etbqz"/>`,
		"fallback": "fa6-solid:video",
	});
}

export default Component;
