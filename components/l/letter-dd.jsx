import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il99x8wzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il99x8wzu"/>`,
		"fallback": "carbon:letter-dd",
	});
}

export default Component;
