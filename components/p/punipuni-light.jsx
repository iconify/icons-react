import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwlkdqsyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwlkdqsyn"/>`,
		"fallback": "selfhst:punipuni-light",
	});
}

export default Component;
