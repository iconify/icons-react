import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nax3mvb3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nax3mvb3q"/>`,
		"fallback": "roentgen:tube-wave-left-wave-right",
	});
}

export default Component;
