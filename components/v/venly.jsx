import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_vfp0bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_vfp0bvp"/>`,
		"fallback": "token:venly",
	});
}

export default Component;
