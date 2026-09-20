import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdo8z2bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdo8z2bcy"/>`,
		"fallback": "simple-icons:kentico",
	});
}

export default Component;
