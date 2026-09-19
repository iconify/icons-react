import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm6_lzbpd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm6_lzbpd"/>`,
		"fallback": "fa7-solid:truck",
	});
}

export default Component;
