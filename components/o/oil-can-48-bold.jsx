import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ng43b9q.css';
import '../../css/z/zgpx6ybju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ng43b9q"/><path class="zgpx6ybju"/>`,
		"fallback": "energy-icons:oil-can-48-bold",
	});
}

export default Component;
