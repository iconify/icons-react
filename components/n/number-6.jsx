import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7n4f2bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7n4f2bcl"/>`,
		"fallback": "ri:number-6",
	});
}

export default Component;
