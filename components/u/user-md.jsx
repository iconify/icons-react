import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xma9i4bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xma9i4bfp"/>`,
		"fallback": "uis:user-md",
	});
}

export default Component;
