import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gks4ctv1n.css';
import '../../css/m/mk5o0v1xb.css';
import '../../css/s/sua3pvbtp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gks4ctv1n"/><path class="mk5o0v1xb"/><path class="sua3pvbtp"/>`,
		"fallback": "openmoji:overview",
	});
}

export default Component;
