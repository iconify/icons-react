import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhdgbeb3k.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhdgbeb3k"/>`,
		"fallback": "fa-brands:pied-piper-alt",
	});
}

export default Component;
