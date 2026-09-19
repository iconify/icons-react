import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0avm8bpo.css';
import '../../css/f/fm0ubtb9b.css';
import '../../css/t/tvfrm8b3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0avm8bpo"/><path class="fm0ubtb9b"/><path class="tvfrm8b3r"/>`,
		"fallback": "ion:ios-american-football",
	});
}

export default Component;
