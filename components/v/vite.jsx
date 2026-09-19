import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v89hnb0kp.css';

const viewBox = {"width":510,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v89hnb0kp"/>`,
		"fallback": "file-icons:vite",
	});
}

export default Component;
