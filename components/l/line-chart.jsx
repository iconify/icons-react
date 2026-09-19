import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-cjo9ueo.css';
import '../../css/p/p5oqracae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-cjo9ueo"/><path class="p5oqracae"/>`,
		"fallback": "bx:line-chart",
	});
}

export default Component;
