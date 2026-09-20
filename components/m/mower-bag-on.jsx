import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyu0hzd1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyu0hzd1v"/>`,
		"fallback": "mdi:mower-bag-on",
	});
}

export default Component;
