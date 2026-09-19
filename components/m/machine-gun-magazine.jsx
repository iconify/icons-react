import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdl5jac-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdl5jac-x"/>`,
		"fallback": "game-icons:machine-gun-magazine",
	});
}

export default Component;
