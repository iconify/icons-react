import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlciivbhx.css';
import '../../css/q/qhg6yeb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlciivbhx"/><path class="qhg6yeb8b"/>`,
		"fallback": "boxicons:shuffle-filled",
	});
}

export default Component;
