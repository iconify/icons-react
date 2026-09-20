import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr_vl5p3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr_vl5p3z"/>`,
		"fallback": "simple-icons:okx",
	});
}

export default Component;
