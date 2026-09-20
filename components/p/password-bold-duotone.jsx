import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfvnd7u4f.css';
import '../../css/l/lol1cdbxs.css';
import '../../css/i/it6wt52-j.css';
import '../../css/g/gl7fqlbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kfvnd7u4f"/><path class="lol1cdbxs"/><path class="it6wt52-j"/><path class="gl7fqlbvp"/></g>`,
		"fallback": "solar:password-bold-duotone",
	});
}

export default Component;
