import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h04f6kb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h04f6kb-n"/>`,
		"fallback": "thesvg:loop",
	});
}

export default Component;
