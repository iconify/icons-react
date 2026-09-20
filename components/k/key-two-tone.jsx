import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g08-83bag.css';
import '../../css/v/v7uztybyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g08-83bag"/><path class="v7uztybyl"/></g>`,
		"fallback": "keyline-icons:key-two-tone",
	});
}

export default Component;
