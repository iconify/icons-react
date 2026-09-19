import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za8lh3llf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za8lh3llf"/>`,
		"fallback": "fluent-mdl2:train",
	});
}

export default Component;
