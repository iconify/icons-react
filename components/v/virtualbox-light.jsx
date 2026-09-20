import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1hm4ub9h.css';
import '../../css/b/bd6wcc_tt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1hm4ub9h"/><path class="bd6wcc_tt"/>`,
		"fallback": "selfhst:virtualbox-light",
	});
}

export default Component;
