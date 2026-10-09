import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg2rt9b6k.css';
import '../../css/c/cthax4bwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg2rt9b6k"/><path class="cthax4bwk"/>`,
		"fallback": "energy-icons:pencil-20-bold",
	});
}

export default Component;
