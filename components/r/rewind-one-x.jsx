import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc7v3q69r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc7v3q69r"/>`,
		"fallback": "fluent-mdl2:rewind-one-x",
	});
}

export default Component;
