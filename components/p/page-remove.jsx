import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1xd35blt.css';
import '../../css/s/sou039b5u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1xd35blt"/><path class="sou039b5u"/>`,
		"fallback": "foundation:page-remove",
	});
}

export default Component;
