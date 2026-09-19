import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plj97-bxh.css';
import '../../css/m/moc8vccjz.css';
import '../../css/p/p_4oxsb6e.css';
import '../../css/o/o-8l1okzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plj97-bxh"/><circle class="moc8vccjz"/><circle class="p_4oxsb6e"/><path class="o-8l1okzb"/>`,
		"fallback": "circum:router",
	});
}

export default Component;
