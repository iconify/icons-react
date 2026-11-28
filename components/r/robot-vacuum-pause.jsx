import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tph2u6z3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tph2u6z3a"/>`,
		"fallback": "noviair:robot-vacuum-pause",
	});
}

export default Component;
