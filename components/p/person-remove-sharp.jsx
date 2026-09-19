import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj0h6tbsi.css';
import '../../css/k/kvfqgdcvb.css';
import '../../css/l/lpwt15b-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj0h6tbsi"/><circle class="kvfqgdcvb"/><path class="lpwt15b-r"/>`,
		"fallback": "ion:person-remove-sharp",
	});
}

export default Component;
