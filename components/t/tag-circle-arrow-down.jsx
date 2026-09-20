import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syvbss82p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syvbss82p"/>`,
		"fallback": "ix:tag-circle-arrow-down",
	});
}

export default Component;
