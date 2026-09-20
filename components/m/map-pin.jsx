import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2m49ccqe.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2m49ccqe"/>`,
		"fallback": "map:map-pin",
	});
}

export default Component;
