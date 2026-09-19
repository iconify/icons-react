import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvaupzbfa.css';
import '../../css/p/pfv5fvbpd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvaupzbfa"/><path class="pfv5fvbpd"/>`,
		"fallback": "famicons:reload-outline",
	});
}

export default Component;
