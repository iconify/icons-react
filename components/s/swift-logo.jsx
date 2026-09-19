import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjxxj7bjm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjxxj7bjm"/>`,
		"fallback": "fluent-mdl2:swift-logo",
	});
}

export default Component;
