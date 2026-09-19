import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ped2ifbwy.css';
import '../../css/n/nppjnzgzv.css';
import '../../css/o/ow9vjabpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ped2ifbwy"/><rect class="nppjnzgzv"/><rect class="ow9vjabpj"/>`,
		"fallback": "boxicons:vertical-align-bottom-filled",
	});
}

export default Component;
