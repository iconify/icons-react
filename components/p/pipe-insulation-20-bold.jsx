import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlo4be-zl.css';
import '../../css/l/lswyakbtp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlo4be-zl"/><path class="lswyakbtp"/>`,
		"fallback": "energy-icons:pipe-insulation-20-bold",
	});
}

export default Component;
