import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob82bpbzu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob82bpbzu"/>`,
		"fallback": "ant-design:pound-circle-filled",
	});
}

export default Component;
