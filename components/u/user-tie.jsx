import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw_7son6s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw_7son6s"/>`,
		"fallback": "fa-solid:user-tie",
	});
}

export default Component;
