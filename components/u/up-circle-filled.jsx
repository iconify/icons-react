import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z88dnnb8s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z88dnnb8s"/>`,
		"fallback": "ant-design:up-circle-filled",
	});
}

export default Component;
