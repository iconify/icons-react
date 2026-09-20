import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baa3s6bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baa3s6bhx"/>`,
		"fallback": "thesvg-color:scylladb",
	});
}

export default Component;
