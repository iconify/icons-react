import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6bjo2qv.css';
import '../../css/j/jjdolp14t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln6bjo2qv"/><path class="jjdolp14t"/>`,
		"fallback": "selfhst:rsshub-light",
	});
}

export default Component;
