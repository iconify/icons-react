import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dopxjy2hi.css';
import '../../css/r/rs80463iz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dopxjy2hi"/><path class="rs80463iz"/>`,
		"fallback": "famicons:shuffle",
	});
}

export default Component;
