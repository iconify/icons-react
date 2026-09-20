import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f09tprafk.css';
import '../../css/u/ug7q-clry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f09tprafk"/><path class="ug7q-clry"/>`,
		"fallback": "selfhst:piped-dark",
	});
}

export default Component;
