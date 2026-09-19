import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8m4y_2p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8m4y_2p"/>`,
		"fallback": "fluent-mdl2:light",
	});
}

export default Component;
