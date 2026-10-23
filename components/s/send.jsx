import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn84l-der.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn84l-der"/>`,
		"fallback": "vadivam:send",
	});
}

export default Component;
