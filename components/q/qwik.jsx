import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8aw24b0h.css';
import '../../css/t/tnv3g-b3r.css';
import '../../css/c/cduhi3biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8aw24b0h"/><path class="tnv3g-b3r"/><path class="cduhi3biq"/>`,
		"fallback": "selfhst:qwik",
	});
}

export default Component;
