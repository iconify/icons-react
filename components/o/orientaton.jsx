import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi3532bvm.css';

const viewBox = {"width":21,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi3532bvm"/>`,
		"fallback": "jam:orientaton",
	});
}

export default Component;
