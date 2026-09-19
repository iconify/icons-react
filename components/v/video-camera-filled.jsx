import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe4svgg5d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe4svgg5d"/>`,
		"fallback": "ant-design:video-camera-filled",
	});
}

export default Component;
