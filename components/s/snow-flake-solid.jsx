import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2qy2kb4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2qy2kb4l"/>`,
		"fallback": "streamline:snow-flake-solid",
	});
}

export default Component;
