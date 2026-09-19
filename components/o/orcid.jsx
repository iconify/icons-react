import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw4fyovto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw4fyovto"/>`,
		"fallback": "fa-brands:orcid",
	});
}

export default Component;
