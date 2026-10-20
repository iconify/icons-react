import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-8gb9b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-8gb9b7s"/>`,
		"fallback": "vadivam:mouse-pointer",
	});
}

export default Component;
