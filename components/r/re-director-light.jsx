import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp5h07bla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp5h07bla"/>`,
		"fallback": "selfhst:re-director-light",
	});
}

export default Component;
