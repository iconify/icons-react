import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig8ne5sll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig8ne5sll"/>`,
		"fallback": "selfhst:pandora-light",
	});
}

export default Component;
