import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si9wz7b4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si9wz7b4s"/>`,
		"fallback": "streamline-flex:small-caps",
	});
}

export default Component;
