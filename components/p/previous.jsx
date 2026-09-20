import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/takax1b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="takax1b3n"/>`,
		"fallback": "uil:previous",
	});
}

export default Component;
