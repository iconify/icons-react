import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjrf2b5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnjrf2b5i"/>`,
		"fallback": "selfhst:verizon-dark",
	});
}

export default Component;
