import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7bxye5gu.css';
import '../../css/f/f0tftrz9n.css';
import '../../css/h/h1bugcb5m.css';
import '../../css/y/yfst6cc1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7bxye5gu"/><path class="f0tftrz9n"/><path class="h1bugcb5m"/><path class="yfst6cc1g"/>`,
		"fallback": "selfhst:quickbars",
	});
}

export default Component;
