import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7v3c9hfx.css';
import '../../css/j/jaeag7yzt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7v3c9hfx"/><path class="jaeag7yzt"/>`,
		"fallback": "carbon:partly-cloudy",
	});
}

export default Component;
