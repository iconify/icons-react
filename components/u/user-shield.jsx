import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj2on39or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj2on39or"/>`,
		"fallback": "vadivam:user-shield",
	});
}

export default Component;
