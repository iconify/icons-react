import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fztcq4amu.css';
import '../../css/t/tuvrb8wpy.css';
import '../../css/u/uqy6_ibtr.css';
import '../../css/s/sliv2sb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fztcq4amu"/><path class="tuvrb8wpy"/><path class="uqy6_ibtr"/><path class="sliv2sb3h"/>`,
		"fallback": "selfhst:ties-link-sharing-dark",
	});
}

export default Component;
