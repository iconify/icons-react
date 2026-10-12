import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkw_aib9x.css';
import '../../css/o/onixhkbxr.css';
import '../../css/u/umdfmcbpo.css';
import '../../css/a/a00b_rbme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkw_aib9x"/><path class="onixhkbxr"/><path class="umdfmcbpo"/><path class="a00b_rbme"/>`,
		"fallback": "energy-icons:town-hall-48-bold",
	});
}

export default Component;
