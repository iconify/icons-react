import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16ypzb4q.css';
import '../../css/o/o2az-abuy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k16ypzb4q"/><path class="o2az-abuy"/>`,
		"fallback": "energy-icons:nuclear-plant-48",
	});
}

export default Component;
