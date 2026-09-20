import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmqdv8bhv.css';
import '../../css/p/pqncy4b2j.css';
import '../../css/z/z7h6iq1vh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmqdv8bhv"/><path class="pqncy4b2j"/><path class="z7h6iq1vh"/>`,
		"fallback": "material-icon-theme:uml",
	});
}

export default Component;
