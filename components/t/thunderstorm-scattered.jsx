import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg1m4vb6k.css';
import '../../css/e/ey_5yvb5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg1m4vb6k"/><path class="ey_5yvb5s"/>`,
		"fallback": "carbon:thunderstorm-scattered",
	});
}

export default Component;
