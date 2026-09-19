import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igfbz1bed.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igfbz1bed"/>`,
		"fallback": "fa6-solid:prescription-bottle-medical",
	});
}

export default Component;
