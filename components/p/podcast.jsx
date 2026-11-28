import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5yb7_bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5yb7_bww"/>`,
		"fallback": "noviair:podcast",
	});
}

export default Component;
