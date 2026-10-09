import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvf62xf5g.css';
import '../../css/k/k-8tebcux.css';
import '../../css/g/gz2x7rbpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvf62xf5g"/><path class="k-8tebcux"/><path class="gz2x7rbpo"/>`,
		"fallback": "energy-icons:screw-20-bold",
	});
}

export default Component;
