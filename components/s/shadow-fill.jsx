import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvf2m-bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvf2m-bli"/>`,
		"fallback": "ri:shadow-fill",
	});
}

export default Component;
