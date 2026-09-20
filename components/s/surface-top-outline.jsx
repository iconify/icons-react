import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg-1ghgu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg-1ghgu"/>`,
		"fallback": "lsicon:surface-top-outline",
	});
}

export default Component;
