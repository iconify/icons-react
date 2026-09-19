import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2qzd6buz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2qzd6buz"/>`,
		"fallback": "ant-design:money-collect-fill",
	});
}

export default Component;
