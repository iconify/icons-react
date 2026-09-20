import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwj_7qynx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwj_7qynx"/>`,
		"fallback": "la:rockrms",
	});
}

export default Component;
