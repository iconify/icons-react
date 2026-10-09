import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omdaj5bmv.css';
import '../../css/f/fphpswbyz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omdaj5bmv"/><path class="fphpswbyz"/>`,
		"fallback": "energy-icons:lithium-48-bold",
	});
}

export default Component;
