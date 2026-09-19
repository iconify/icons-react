import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc02u_bde.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc02u_bde"/>`,
		"fallback": "ant-design:red-envelope-filled",
	});
}

export default Component;
