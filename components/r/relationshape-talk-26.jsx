import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5r31hxnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5r31hxnq"/>`,
		"fallback": "garden:relationshape-talk-26",
	});
}

export default Component;
