import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2l3_-b7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2l3_-b7o"/>`,
		"fallback": "streamline-flex:star-badge-solid",
	});
}

export default Component;
