import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4tanacyw.css';
import '../../css/z/zkvndccat.css';
import '../../css/l/lmxdt7tqu.css';
import '../../css/a/a1iftwaal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4tanacyw"/><path class="zkvndccat"/><path class="lmxdt7tqu"/><path class="a1iftwaal"/></g>`,
		"fallback": "tdesign:internet",
	});
}

export default Component;
