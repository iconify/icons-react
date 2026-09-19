import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5duaqbqs.css';

const viewBox = {"width":1792,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5duaqbqs"/>`,
		"fallback": "vs:smoking-alt",
	});
}

export default Component;
