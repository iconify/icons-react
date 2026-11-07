import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gzan0ibzy.css';
import '../../css/i/iufs_r29h.css';
import '../../css/a/at_81ebpk.css';
import '../../css/y/yn2cyvv6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gzan0ibzy"/><path class="iufs_r29h"/><path class="at_81ebpk"/><path class="yn2cyvv6b"/></g>`,
		"fallback": "solar:swimming-broken",
	});
}

export default Component;
