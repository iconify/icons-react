import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx7r33b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx7r33b-v"/>`,
		"fallback": "noviair:user-circle-minus",
	});
}

export default Component;
