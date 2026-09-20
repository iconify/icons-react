import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy9whxbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy9whxbzv"/>`,
		"fallback": "ri:safari-line",
	});
}

export default Component;
