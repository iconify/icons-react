import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6cp4xa2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6cp4xa2q"/>`,
		"fallback": "icomoon-free:stop2",
	});
}

export default Component;
