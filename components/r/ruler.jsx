import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm0j_5byp.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm0j_5byp"/>`,
		"fallback": "wpf:ruler",
	});
}

export default Component;
