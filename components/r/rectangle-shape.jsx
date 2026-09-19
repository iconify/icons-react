import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esrx3jwdm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esrx3jwdm"/>`,
		"fallback": "fluent-mdl2:rectangle-shape",
	});
}

export default Component;
