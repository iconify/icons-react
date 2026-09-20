import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/b/bv1zhoonj.css';
import '../../css/p/p4_upccpe.css';
import '../../css/e/ewfjesctf.css';
import '../../css/p/phe7tob-q.css';
import '../../css/w/wpswi5bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zb2kedx8a"/><path class="bv1zhoonj"/><path class="p4_upccpe"/><path class="ewfjesctf"/><path class="phe7tob-q"/><path class="wpswi5bdu"/></g>`,
		"fallback": "solar:target-bold-duotone",
	});
}

export default Component;
