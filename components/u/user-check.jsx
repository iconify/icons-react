import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bse37hb3s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bse37hb3s"/>`,
		"fallback": "fa-solid:user-check",
	});
}

export default Component;
