import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi6t1obnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi6t1obnv"/>`,
		"fallback": "tabler:script-plus",
	});
}

export default Component;
