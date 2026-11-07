import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0j3xu4rw.css';
import '../../css/h/hnd2g735k.css';
import '../../css/o/oa0gdcb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0j3xu4rw"/><path class="hnd2g735k"/><path class="oa0gdcb5k"/>`,
		"fallback": "solar:move-horizontal-bold-duotone",
	});
}

export default Component;
