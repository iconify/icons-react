import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khay4rsjt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khay4rsjt"/>`,
		"fallback": "ant-design:user-add",
	});
}

export default Component;
