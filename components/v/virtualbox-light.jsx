import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2b4j_7ld.css';
import '../../css/b/bd6wcc_tt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2b4j_7ld"/><path class="bd6wcc_tt"/>`,
		"fallback": "selfhst:virtualbox-light",
	});
}

export default Component;
