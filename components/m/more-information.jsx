import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmw69mb4r.css';
import '../../css/w/w4c3hmsue.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmw69mb4r"/><path class="w4c3hmsue"/>`,
		"fallback": "openmoji:more-information",
	});
}

export default Component;
