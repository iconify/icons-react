import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byfhn9bmy.css';
import '../../css/c/cvy_vhbpu.css';
import '../../css/a/ap0g6hclu.css';
import '../../css/a/ax25lkl5z.css';
import '../../css/z/zeosoac1b.css';
import '../../css/y/yijvuccmn.css';
import '../../css/a/a2qxobchg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byfhn9bmy"/><path clip-rule="evenodd" class="cvy_vhbpu"/><path class="ap0g6hclu"/><path class="ax25lkl5z"/><path class="zeosoac1b"/><path class="yijvuccmn"/><path class="a2qxobchg"/></g>`,
		"fallback": "solar:video-frame-cut-2-bold-duotone",
	});
}

export default Component;
