import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd9w_l7jo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd9w_l7jo"/>`,
		"fallback": "game-icons:splashy-stream",
	});
}

export default Component;
