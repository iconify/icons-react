import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hib7fibeu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hib7fibeu"/>`,
		"fallback": "file-icons:json-ld1",
	});
}

export default Component;
