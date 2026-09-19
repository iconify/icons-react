import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5u-s0bxq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5u-s0bxq"/>`,
		"fallback": "fluent-mdl2:pie-single-solid",
	});
}

export default Component;
