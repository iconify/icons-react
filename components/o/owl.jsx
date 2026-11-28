import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ot9_brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ot9_brk"/>`,
		"fallback": "noviair-light:owl",
	});
}

export default Component;
