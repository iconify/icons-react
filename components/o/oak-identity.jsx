import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aubbjwbfk.css';
import '../../css/p/pjdliy_ae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aubbjwbfk"/><path class="pjdliy_ae"/>`,
		"fallback": "selfhst:oak-identity",
	});
}

export default Component;
