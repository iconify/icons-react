import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df88n9bcy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df88n9bcy"/>`,
		"fallback": "fluent-mdl2:six-point-star",
	});
}

export default Component;
