import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crh1vabvn.css';
import '../../css/q/qlf4oqdjd.css';
import '../../css/k/kxmjoos-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crh1vabvn"/><path class="qlf4oqdjd"/><path class="kxmjoos-z"/></g>`,
		"fallback": "solar:magnifier-check-bold-duotone",
	});
}

export default Component;
