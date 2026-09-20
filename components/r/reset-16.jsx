import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_0yjrl9v.css';
import '../../css/m/mxgiipv4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_0yjrl9v"/><path class="mxgiipv4r"/>`,
		"fallback": "qlementine-icons:reset-16",
	});
}

export default Component;
