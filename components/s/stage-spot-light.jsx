import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj9q7uu1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj9q7uu1c"/>`,
		"fallback": "cbi:stage-spot-light",
	});
}

export default Component;
