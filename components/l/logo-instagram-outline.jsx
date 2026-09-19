import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_t5kymf.css';
import '../../css/m/m1idjh0xo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk_t5kymf"/><path class="m1idjh0xo"/>`,
		"fallback": "ion:logo-instagram-outline",
	});
}

export default Component;
