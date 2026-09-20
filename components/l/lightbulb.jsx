import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzj1rbc4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzj1rbc4b"/>`,
		"fallback": "reicon:lightbulb",
	});
}

export default Component;
