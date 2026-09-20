import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-lm1hbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-lm1hbpp"/>`,
		"fallback": "ri:swap-2-line",
	});
}

export default Component;
