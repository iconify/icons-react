import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhgkc_7kn.css';
import '../../css/y/yigc9bbwq.css';
import '../../css/m/md89sq31k.css';
import '../../css/m/mf8sa2svj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bhgkc_7kn"/><path class="yigc9bbwq"/><path class="md89sq31k"/><path clip-rule="evenodd" class="mf8sa2svj"/></g>`,
		"fallback": "solar:vinyl-record-bold-duotone",
	});
}

export default Component;
