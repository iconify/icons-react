import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcj9e7b2y.css';
import '../../css/e/ea5zn2byz.css';
import '../../css/o/obja-xbfi.css';
import '../../css/o/ofhs6z3pm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcj9e7b2y"/><path class="ea5zn2byz"/><path class="obja-xbfi"/><path class="ofhs6z3pm"/>`,
		"fallback": "selfhst:microsoft-word-light",
	});
}

export default Component;
