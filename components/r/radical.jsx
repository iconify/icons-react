import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrq5u1bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrq5u1bco"/>`,
		"fallback": "vadivam:radical",
	});
}

export default Component;
