import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkwabjk_z.css';
import '../../css/e/e268v4bmv.css';
import '../../css/p/py6masfhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkwabjk_z"/><path class="e268v4bmv"/><path class="py6masfhe"/>`,
		"fallback": "energy-icons:switch-closed-48-bold",
	});
}

export default Component;
