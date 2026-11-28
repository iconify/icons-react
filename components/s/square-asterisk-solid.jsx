import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yshpki_ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yshpki_ni"/>`,
		"fallback": "iconaut:square-asterisk-solid",
	});
}

export default Component;
