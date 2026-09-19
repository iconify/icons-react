import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kic8bacdg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kic8bacdg"/>`,
		"fallback": "icomoon-free:sort-numeric-asc",
	});
}

export default Component;
