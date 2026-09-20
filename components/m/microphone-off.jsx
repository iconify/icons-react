import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns20xvbof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns20xvbof"/>`,
		"fallback": "rivet-icons:microphone-off",
	});
}

export default Component;
