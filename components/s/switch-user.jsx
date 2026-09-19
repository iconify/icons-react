import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo9f8bpm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo9f8bpm"/>`,
		"fallback": "fluent-mdl2:switch-user",
	});
}

export default Component;
