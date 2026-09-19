import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5dtazbcy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5dtazbcy"/>`,
		"fallback": "fa7-solid:peseta-sign",
	});
}

export default Component;
