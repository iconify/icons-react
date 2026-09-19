import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc82i_bis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc82i_bis"/>`,
		"fallback": "garden:minimize-fill-16",
	});
}

export default Component;
