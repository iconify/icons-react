import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2q5z-wrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2q5z-wrk"/>`,
		"fallback": "fa-regular:object-group",
	});
}

export default Component;
