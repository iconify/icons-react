import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgvaycp0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgvaycp0l"/>`,
		"fallback": "reicon:sort-down-up-filled",
	});
}

export default Component;
