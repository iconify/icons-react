import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/p/phz5e8cbv.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="hwsal5q-o"/><path class="phz5e8cbv"/><circle class="ons53cb4g"/></g>`,
		"fallback": "lucide:ship-wheel",
	});
}

export default Component;
