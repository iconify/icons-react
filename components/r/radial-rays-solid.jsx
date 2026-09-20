import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk92eoj1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk92eoj1m"/>`,
		"fallback": "sidekickicons:radial-rays-solid",
	});
}

export default Component;
