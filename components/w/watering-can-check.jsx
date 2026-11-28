import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ird1tc7rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ird1tc7rf"/>`,
		"fallback": "noviair:watering-can-check",
	});
}

export default Component;
