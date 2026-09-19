import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axj77dh9p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axj77dh9p"/>`,
		"fallback": "ant-design:sketch-circle-filled",
	});
}

export default Component;
