import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgb2-fblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgb2-fblw"/>`,
		"fallback": "ri:menu-5-line",
	});
}

export default Component;
