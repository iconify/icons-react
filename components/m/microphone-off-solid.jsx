import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfj-wcb0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfj-wcb0g"/>`,
		"fallback": "rivet-icons:microphone-off-solid",
	});
}

export default Component;
