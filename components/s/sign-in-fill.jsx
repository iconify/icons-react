import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy0z5bcpu.css';
import '../../css/o/ol75fg2fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy0z5bcpu"/><path class="ol75fg2fk"/>`,
		"fallback": "si:sign-in-fill",
	});
}

export default Component;
