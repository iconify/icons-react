import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urg8vg02i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urg8vg02i"/>`,
		"fallback": "fluent-mdl2:twitter-logo",
	});
}

export default Component;
