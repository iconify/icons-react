import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4l_6bc_j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4l_6bc_j"/>`,
		"fallback": "fluent-mdl2:test-impact-solid",
	});
}

export default Component;
