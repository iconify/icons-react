import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brrzp7bqp.css';
import '../../css/y/yswlpl_1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brrzp7bqp"/><path class="yswlpl_1d"/>`,
		"fallback": "carbon:scooter-front",
	});
}

export default Component;
