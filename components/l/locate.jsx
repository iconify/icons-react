import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm__iwh4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm__iwh4h"/>`,
		"fallback": "noviair-light:locate",
	});
}

export default Component;
