import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucft0wbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucft0wbll"/>`,
		"fallback": "mdi:unity",
	});
}

export default Component;
