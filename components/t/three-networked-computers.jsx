import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqk_-ub_w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqk_-ub_w"/>`,
		"fallback": "dinkie-icons:three-networked-computers",
	});
}

export default Component;
