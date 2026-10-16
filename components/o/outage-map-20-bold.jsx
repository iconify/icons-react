import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bls5yhbwz.css';
import '../../css/r/r7vl_0u4z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bls5yhbwz"/><path class="r7vl_0u4z"/>`,
		"fallback": "energy-icons:outage-map-20-bold",
	});
}

export default Component;
