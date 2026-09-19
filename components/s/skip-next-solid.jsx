import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl0vd86ea.css';
import '../../css/v/vsgtqbb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gl0vd86ea"/><path class="vsgtqbb0i"/></g>`,
		"fallback": "iconoir:skip-next-solid",
	});
}

export default Component;
