import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmdssxr9w.css';
import '../../css/d/d709sgber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmdssxr9w"/><path class="d709sgber"/>`,
		"fallback": "ion:md-beaker",
	});
}

export default Component;
