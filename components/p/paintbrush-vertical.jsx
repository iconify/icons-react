import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcb8d9bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcb8d9bmw"/>`,
		"fallback": "vadivam:paintbrush-vertical",
	});
}

export default Component;
