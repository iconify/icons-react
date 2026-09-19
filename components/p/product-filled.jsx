import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gso-frb0l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gso-frb0l"/>`,
		"fallback": "ant-design:product-filled",
	});
}

export default Component;
