import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0mgmxb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0mgmxb1o"/>`,
		"fallback": "streamline-sharp:shirt-solid",
	});
}

export default Component;
