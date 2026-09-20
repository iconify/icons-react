import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz1o6hb3j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz1o6hb3j"/>`,
		"fallback": "streamline:navigation-arrow-off",
	});
}

export default Component;
