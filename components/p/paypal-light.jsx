import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9a9t_3-u.css';
import '../../css/x/xxzjvd64g.css';
import '../../css/f/f8umypbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9a9t_3-u"/><path class="xxzjvd64g"/><path class="f8umypbrr"/>`,
		"fallback": "selfhst:paypal-light",
	});
}

export default Component;
