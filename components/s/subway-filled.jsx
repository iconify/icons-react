import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o36p4fb4z.css';
import '../../css/c/cj_6u2bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o36p4fb4z"/><path class="cj_6u2bea"/>`,
		"fallback": "boxicons:subway-filled",
	});
}

export default Component;
