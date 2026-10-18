import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nost1bbvh.css';
import '../../css/z/zpfkve_xq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nost1bbvh"/><path class="zpfkve_xq"/>`,
		"fallback": "energy-icons:ufh-manifold-20-bold",
	});
}

export default Component;
