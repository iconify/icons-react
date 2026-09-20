import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykw5rkkzn.css';
import '../../css/l/ljm19-21z.css';
import '../../css/n/np_ofpb_c.css';
import '../../css/h/hkcbm141j.css';
import '../../css/n/npuypub5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ykw5rkkzn"/><path class="ljm19-21z"/><path class="np_ofpb_c"/><path clip-rule="evenodd" class="hkcbm141j"/><path clip-rule="evenodd" class="npuypub5o"/></g>`,
		"fallback": "solar:safe-2-bold-duotone",
	});
}

export default Component;
