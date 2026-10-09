import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofsojfsnm.css';
import '../../css/q/q45btnm6w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofsojfsnm"/><path class="q45btnm6w"/>`,
		"fallback": "energy-icons:pool-20-bold",
	});
}

export default Component;
