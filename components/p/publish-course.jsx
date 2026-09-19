import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgezpr92m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgezpr92m"/>`,
		"fallback": "fluent-mdl2:publish-course",
	});
}

export default Component;
