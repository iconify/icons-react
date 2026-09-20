import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvjyo5b4q.css';
import '../../css/l/ll1r8hb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvjyo5b4q"/><path class="ll1r8hb9h"/>`,
		"fallback": "selfhst:nanosmart",
	});
}

export default Component;
