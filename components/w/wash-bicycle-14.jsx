import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzj8i4mvb.css';

const viewBox = {"width":1920,"height":1080};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tzj8i4mvb"/>`,
		"fallback": "osmic:wash-bicycle-14",
	});
}

export default Component;
