import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zz-s87b9p.css';
import '../../css/f/f3qef35pj.css';
import '../../css/d/dt5zzgaeh.css';
import '../../css/n/nzmqz3bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zz-s87b9p"/><path class="f3qef35pj"/><path class="dt5zzgaeh"/><path class="nzmqz3bvt"/></g>`,
		"fallback": "solar:smart-speaker-line-duotone",
	});
}

export default Component;
