import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf0iphdax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf0iphdax"/>`,
		"fallback": "selfhst:kaunta-light",
	});
}

export default Component;
