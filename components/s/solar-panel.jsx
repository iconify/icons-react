import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukalqnb9m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukalqnb9m"/>`,
		"fallback": "la:solar-panel",
	});
}

export default Component;
