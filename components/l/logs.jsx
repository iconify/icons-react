import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0v_c7zwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0v_c7zwp"/>`,
		"fallback": "vadivam:logs",
	});
}

export default Component;
