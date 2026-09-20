import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2tanqqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2tanqqr"/>`,
		"fallback": "si:play-previous-fill",
	});
}

export default Component;
