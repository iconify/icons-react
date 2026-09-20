import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz5y_9bym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz5y_9bym"/>`,
		"fallback": "streamline-flex:tablet-capsule-solid",
	});
}

export default Component;
