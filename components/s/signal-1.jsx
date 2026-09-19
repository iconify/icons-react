import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/useoh5bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="useoh5bdd"/>`,
		"fallback": "bx:signal-1",
	});
}

export default Component;
