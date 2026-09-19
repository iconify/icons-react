import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6zcjhb8g.css';
import '../../css/v/vt3ssfbtt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6zcjhb8g"/><path class="vt3ssfbtt"/>`,
		"fallback": "carbon:rule-data-quality",
	});
}

export default Component;
