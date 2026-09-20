import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-tf9xb7m.css';
import '../../css/q/qqhbc_oik.css';
import '../../css/b/ba4k5pb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-tf9xb7m"/><path class="qqhbc_oik"/><path class="ba4k5pb3f"/></g>`,
		"fallback": "solar:lightbulb-bold-duotone",
	});
}

export default Component;
