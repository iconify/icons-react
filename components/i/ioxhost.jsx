import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iruil4alm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iruil4alm"/>`,
		"fallback": "fa7-brands:ioxhost",
	});
}

export default Component;
