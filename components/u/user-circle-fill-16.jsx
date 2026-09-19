import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvs3kpobq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvs3kpobq"/>`,
		"fallback": "garden:user-circle-fill-16",
	});
}

export default Component;
