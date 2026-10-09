import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdclrrbld.css';
import '../../css/z/zu1wjac1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdclrrbld"/><path class="zu1wjac1t"/>`,
		"fallback": "energy-icons:pier-48-bold",
	});
}

export default Component;
