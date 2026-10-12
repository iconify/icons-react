import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b21qzcbpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b21qzcbpq"/>`,
		"fallback": "garden:phone-end-stroke-20",
	});
}

export default Component;
