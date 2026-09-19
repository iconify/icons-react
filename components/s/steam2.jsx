import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j49_occ8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j49_occ8r"/>`,
		"fallback": "icomoon-free:steam2",
	});
}

export default Component;
