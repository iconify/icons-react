import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl0z4qqxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl0z4qqxk"/>`,
		"fallback": "selfhst:kimai-light",
	});
}

export default Component;
