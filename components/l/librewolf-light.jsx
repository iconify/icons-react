import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_-3hmxfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_-3hmxfs"/>`,
		"fallback": "selfhst:librewolf-light",
	});
}

export default Component;
