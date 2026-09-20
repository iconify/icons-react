import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilecwd6xt.css';
import '../../css/t/tnupwvb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilecwd6xt"/><ellipse class="tnupwvb0i"/>`,
		"fallback": "typcn:social-linkedin",
	});
}

export default Component;
