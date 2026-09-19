import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh_rcpr_l.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh_rcpr_l"/>`,
		"fallback": "fa:map-pin",
	});
}

export default Component;
