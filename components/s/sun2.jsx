import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvzzvdbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvzzvdbsk"/>`,
		"fallback": "reicon:sun2",
	});
}

export default Component;
