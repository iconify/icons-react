import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6t456b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6t456b9v"/>`,
		"fallback": "vadivam:user-round-minus",
	});
}

export default Component;
