import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgtx7zbou.css';
import '../../css/r/rz4lmd_wd.css';
import '../../css/p/p0__gb-of.css';
import '../../css/z/zp4s15b9k.css';
import '../../css/l/l32gl00fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 10.21 12.8)" class="fgtx7zbou"/><path class="rz4lmd_wd"/><rect transform="rotate(90 8.96 1.7)" class="p0__gb-of"/><rect transform="rotate(-180 21.25 22.01)" class="zp4s15b9k"/><path class="l32gl00fq"/></g>`,
		"fallback": "andrsrxn:microscope",
	});
}

export default Component;
