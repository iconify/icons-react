import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk3wpst3e.css';
import '../../css/y/yp_-cobqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk3wpst3e"/><path class="yp_-cobqv"/>`,
		"fallback": "streamline-ultimate:night-moon-begin-bold",
	});
}

export default Component;
