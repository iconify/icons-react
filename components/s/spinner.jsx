import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu7p_-bky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu7p_-bky"/>`,
		"fallback": "formkit:spinner",
	});
}

export default Component;
