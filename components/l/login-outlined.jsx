import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj665y5jj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj665y5jj"/>`,
		"fallback": "ant-design:login-outlined",
	});
}

export default Component;
