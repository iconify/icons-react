import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxyh9s5lq.css';
import '../../css/f/f5hnvrbvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxyh9s5lq"/><path class="f5hnvrbvu"/>`,
		"fallback": "garden:tag-stroke-20",
	});
}

export default Component;
