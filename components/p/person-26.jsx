import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp5dwpbbf.css';
import '../../css/u/ur1fn0ckq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dp5dwpbbf"/><path class="ur1fn0ckq"/></g>`,
		"fallback": "garden:person-26",
	});
}

export default Component;
