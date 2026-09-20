import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj80bmbzo.css';
import '../../css/s/s4vpxwbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj80bmbzo"/><path class="s4vpxwbln"/>`,
		"fallback": "stash:plan-light",
	});
}

export default Component;
