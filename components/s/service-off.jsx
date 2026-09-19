import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgoif-b0y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgoif-b0y"/>`,
		"fallback": "fluent-mdl2:service-off",
	});
}

export default Component;
