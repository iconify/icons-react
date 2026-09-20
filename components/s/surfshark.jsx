import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvjmzfm2h.css';
import '../../css/a/ay64in9vj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvjmzfm2h"/><path class="ay64in9vj"/>`,
		"fallback": "selfhst:surfshark",
	});
}

export default Component;
