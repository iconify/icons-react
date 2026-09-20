import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdd7-wone.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdd7-wone"/>`,
		"fallback": "roentgen:kerb",
	});
}

export default Component;
