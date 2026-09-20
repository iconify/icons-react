import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfjry7otm.css';
import '../../css/g/gqkpe_bho.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfjry7otm"/><path class="gqkpe_bho"/>`,
		"fallback": "qlementine-icons:log-in-16",
	});
}

export default Component;
