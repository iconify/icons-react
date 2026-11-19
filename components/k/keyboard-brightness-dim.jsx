import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldfn9kr5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldfn9kr5i"/>`,
		"fallback": "andrsrxn:keyboard-brightness-dim",
	});
}

export default Component;
