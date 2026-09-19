import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np1z57bvk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np1z57bvk"/>`,
		"fallback": "ant-design:open-a-i-filled",
	});
}

export default Component;
