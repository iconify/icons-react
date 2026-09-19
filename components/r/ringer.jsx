import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzpvu9bif.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzpvu9bif"/>`,
		"fallback": "fluent-mdl2:ringer",
	});
}

export default Component;
