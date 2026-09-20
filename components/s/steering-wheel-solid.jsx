import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2vltv_6b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2vltv_6b"/>`,
		"fallback": "streamline:steering-wheel-solid",
	});
}

export default Component;
