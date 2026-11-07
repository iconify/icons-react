import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsd2d9bea.css';
import '../../css/y/yvm5pb94k.css';
import '../../css/b/bd2_93bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsd2d9bea"/><path class="yvm5pb94k"/><path class="bd2_93bmd"/>`,
		"fallback": "solar:printer-minimalistic-bold",
	});
}

export default Component;
