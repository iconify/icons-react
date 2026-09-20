import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs6_p0ttt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs6_p0ttt"/>`,
		"fallback": "ri:upload-fill",
	});
}

export default Component;
