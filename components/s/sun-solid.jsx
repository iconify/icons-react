import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm87gbbyd.css';
import '../../css/g/gs34l4b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm87gbbyd"/><path class="gs34l4b5l"/>`,
		"fallback": "pixel:sun-solid",
	});
}

export default Component;
