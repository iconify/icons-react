import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcomewbtu.css';
import '../../css/m/mpg7plbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer pcomewbtu"/><path class="duoicon-primary-layer mpg7plbez"/>`,
		"fallback": "duo-icons:message",
	});
}

export default Component;
