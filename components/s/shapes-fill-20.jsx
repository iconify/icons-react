import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn705c-7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn705c-7e"/>`,
		"fallback": "garden:shapes-fill-20",
	});
}

export default Component;
