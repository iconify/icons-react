import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7c9z5_wq.css';
import '../../css/k/kmcbvkrhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7c9z5_wq"/><path class="kmcbvkrhb"/>`,
		"fallback": "garden:microphone-off-stroke-16",
	});
}

export default Component;
