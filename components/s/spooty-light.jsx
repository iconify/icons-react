import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyp808bel.css';
import '../../css/g/gq1c8db9c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyp808bel"/><path class="gq1c8db9c"/>`,
		"fallback": "selfhst:spooty-light",
	});
}

export default Component;
