import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phfnueb0e.css';
import '../../css/f/f2er5zbwv.css';

const viewBox = {"width":272.4,"height":166.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phfnueb0e"/><path class="f2er5zbwv"/>`,
		"fallback": "thesvg-color:prusa-research-dark",
	});
}

export default Component;
