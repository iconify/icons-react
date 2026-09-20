import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shtvigbaj.css';
import '../../css/t/td9yfnbnw.css';
import '../../css/q/ql028qbli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shtvigbaj"/><path class="td9yfnbnw"/><path class="ql028qbli"/>`,
		"fallback": "selfhst:tvdb",
	});
}

export default Component;
