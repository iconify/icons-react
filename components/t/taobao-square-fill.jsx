import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9_4cn2dw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9_4cn2dw"/>`,
		"fallback": "ant-design:taobao-square-fill",
	});
}

export default Component;
