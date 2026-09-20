import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhb31c7zh.css';
import '../../css/c/cjovx-b9e.css';
import '../../css/a/an5xydbku.css';
import '../../css/z/zaaygqbyc.css';
import '../../css/z/z1myl7fek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhb31c7zh"/><path class="cjovx-b9e"/><path class="an5xydbku"/><path class="zaaygqbyc"/><path class="z1myl7fek"/></g>`,
		"fallback": "streamline-ultimate-color:monetization-touch-coin",
	});
}

export default Component;
