import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdr7lkbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdr7lkbha"/>`,
		"fallback": "thesvg-color:songoda",
	});
}

export default Component;
