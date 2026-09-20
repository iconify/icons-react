import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gznx1ybfi.css';
import '../../css/s/spkxylb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gznx1ybfi"/><path class="spkxylb2v"/></g>`,
		"fallback": "solar:star-rings-bold-duotone",
	});
}

export default Component;
