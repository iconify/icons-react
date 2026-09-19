import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbka6eb7h.css';
import '../../css/p/piht5gbxt.css';
import '../../css/k/knkpb5bxr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbka6eb7h"/><path class="piht5gbxt"/><path class="knkpb5bxr"/>`,
		"fallback": "garden:new-window-stroke-16",
	});
}

export default Component;
