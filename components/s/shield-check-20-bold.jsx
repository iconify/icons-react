import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4bzr0bap.css';
import '../../css/z/z_bjwrbux.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4bzr0bap"/><path class="z_bjwrbux"/>`,
		"fallback": "energy-icons:shield-check-20-bold",
	});
}

export default Component;
