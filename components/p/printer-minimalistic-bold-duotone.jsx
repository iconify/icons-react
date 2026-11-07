import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsd2d9bea.css';
import '../../css/b/bd2_93bmd.css';
import '../../css/k/k7eozybwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsd2d9bea"/><path class="bd2_93bmd"/><path class="k7eozybwj"/>`,
		"fallback": "solar:printer-minimalistic-bold-duotone",
	});
}

export default Component;
