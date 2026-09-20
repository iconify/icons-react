import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yklz2q6fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yklz2q6fk"/>`,
		"fallback": "keyline-icons:mail-check",
	});
}

export default Component;
