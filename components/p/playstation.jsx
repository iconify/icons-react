import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsyxn_5xa.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsyxn_5xa"/>`,
		"fallback": "fa-brands:playstation",
	});
}

export default Component;
