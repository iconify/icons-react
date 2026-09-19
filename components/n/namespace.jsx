import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd322u6xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd322u6xf"/>`,
		"fallback": "eos-icons:namespace",
	});
}

export default Component;
