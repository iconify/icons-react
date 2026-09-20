import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqr0i-kdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqr0i-kdq"/>`,
		"fallback": "thesvg:longhorn",
	});
}

export default Component;
