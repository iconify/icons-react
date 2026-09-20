import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgm1vac6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgm1vac6o"/>`,
		"fallback": "uis:signout",
	});
}

export default Component;
