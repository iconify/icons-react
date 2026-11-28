import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwmvxg2bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwmvxg2bc"/>`,
		"fallback": "noviair:user-refresh",
	});
}

export default Component;
