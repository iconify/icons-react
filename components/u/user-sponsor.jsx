import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4uribag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4uribag"/>`,
		"fallback": "carbon:user-sponsor",
	});
}

export default Component;
