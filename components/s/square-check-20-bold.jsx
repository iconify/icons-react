import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xalnqm_-k.css';
import '../../css/p/pjtb2zjhw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xalnqm_-k"/><path class="pjtb2zjhw"/>`,
		"fallback": "energy-icons:square-check-20-bold",
	});
}

export default Component;
