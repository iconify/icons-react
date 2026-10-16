import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgaw34l5h.css';
import '../../css/j/jo9nlbz1l.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgaw34l5h"/><path class="jo9nlbz1l"/><path class="a-8czfekn"/>`,
		"fallback": "energy-icons:loan-48",
	});
}

export default Component;
