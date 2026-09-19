import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o14fbdelo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o14fbdelo"/>`,
		"fallback": "fe:tumbler-glass",
	});
}

export default Component;
