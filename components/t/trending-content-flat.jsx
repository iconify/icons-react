import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xagi25i7x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xagi25i7x"/>`,
		"fallback": "streamline-color:trending-content-flat",
	});
}

export default Component;
