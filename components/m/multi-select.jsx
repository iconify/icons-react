import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4g4wxu4l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4g4wxu4l"/>`,
		"fallback": "fluent-mdl2:multi-select",
	});
}

export default Component;
