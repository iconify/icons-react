import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3qrw7b3x.css';
import '../../css/n/n2w7bjvhk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3qrw7b3x"/><path class="n2w7bjvhk"/>`,
		"fallback": "energy-icons:shipping-container-20",
	});
}

export default Component;
