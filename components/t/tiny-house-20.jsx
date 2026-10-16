import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucyj_sb_u.css';
import '../../css/l/l0cgkbf-f.css';
import '../../css/b/bx8fgc64p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucyj_sb_u"/><path class="l0cgkbf-f"/><path class="bx8fgc64p"/>`,
		"fallback": "energy-icons:tiny-house-20",
	});
}

export default Component;
