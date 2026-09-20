import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8j5c3sho.css';
import '../../css/b/be5fe-z3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8j5c3sho"/><path class="be5fe-z3x"/>`,
		"fallback": "selfhst:virtualbox-dark",
	});
}

export default Component;
