import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc_g6wb1m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc_g6wb1m"/>`,
		"fallback": "ant-design:signature-outlined",
	});
}

export default Component;
