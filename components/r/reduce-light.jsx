import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnopntb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnopntb5p"/>`,
		"fallback": "lets-icons:reduce-light",
	});
}

export default Component;
