import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj_9l9bai.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj_9l9bai"/>`,
		"fallback": "devicon-plain:vertx",
	});
}

export default Component;
