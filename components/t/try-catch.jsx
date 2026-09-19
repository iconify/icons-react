import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3g_acbwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3g_acbwh"/>`,
		"fallback": "carbon:try-catch",
	});
}

export default Component;
