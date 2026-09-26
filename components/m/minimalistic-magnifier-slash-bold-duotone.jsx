import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/c/cjjng6bsx.css';
import '../../css/g/gxfi52bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="r0xhknb7f"/><path class="cjjng6bsx"/><path class="gxfi52bne"/></g>`,
		"fallback": "solar:minimalistic-magnifier-slash-bold-duotone",
	});
}

export default Component;
