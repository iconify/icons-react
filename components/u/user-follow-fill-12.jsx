import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzt41kbzq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzt41kbzq"/>`,
		"fallback": "garden:user-follow-fill-12",
	});
}

export default Component;
