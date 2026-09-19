import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0j6vybkj.css';
import '../../css/v/vytfc2c_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0j6vybkj"/><path class="vytfc2c_t"/>`,
		"fallback": "ion:ios-megaphone",
	});
}

export default Component;
