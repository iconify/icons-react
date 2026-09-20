import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxjk6z-uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxjk6z-uv"/>`,
		"fallback": "streamline-cyber:sun-set-2",
	});
}

export default Component;
