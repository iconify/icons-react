import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8lwz908c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8lwz908c"/>`,
		"fallback": "vadivam:unplug",
	});
}

export default Component;
