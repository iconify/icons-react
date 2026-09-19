import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfql7dklk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfql7dklk"/>`,
		"fallback": "ant-design:smile-fill",
	});
}

export default Component;
