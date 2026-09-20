import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aubbjwbfk.css';
import '../../css/r/rp9ikhbyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aubbjwbfk"/><path class="rp9ikhbyj"/>`,
		"fallback": "selfhst:oak-identity",
	});
}

export default Component;
