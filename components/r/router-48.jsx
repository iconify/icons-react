import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5cmpabez.css';
import '../../css/j/jqhtdhbem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5cmpabez"/><path class="jqhtdhbem"/>`,
		"fallback": "energy-icons:router-48",
	});
}

export default Component;
