import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq5v0fbso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq5v0fbso"/>`,
		"fallback": "selfhst:pgsty-silo-light",
	});
}

export default Component;
