import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or3w7ac_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or3w7ac_p"/>`,
		"fallback": "selfhst:rybbit-light",
	});
}

export default Component;
