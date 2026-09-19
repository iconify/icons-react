import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo7m9ebwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo7m9ebwm"/>`,
		"fallback": "cbi:intel-cpu",
	});
}

export default Component;
