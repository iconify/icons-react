import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-p5v55ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-p5v55ht"/>`,
		"fallback": "noviair:pill-check",
	});
}

export default Component;
