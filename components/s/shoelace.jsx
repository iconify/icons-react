import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2p8lviiw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2p8lviiw"/>`,
		"fallback": "fa7-brands:shoelace",
	});
}

export default Component;
