import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzahbq16r.css';
import '../../css/x/xlg8q8b-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzahbq16r"/><path class="xlg8q8b-i"/>`,
		"fallback": "selfhst:sablier",
	});
}

export default Component;
