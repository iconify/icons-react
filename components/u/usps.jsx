import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzka9l_ru.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzka9l_ru"/>`,
		"fallback": "fa6-brands:usps",
	});
}

export default Component;
