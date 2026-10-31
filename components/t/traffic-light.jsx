import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t4zl0rbtk.css';
import '../../css/v/vx8uhjbtk.css';
import '../../css/h/hqyg-9bir.css';
import '../../css/p/p0q2sxjnz.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t4zl0rbtk"/><path class="vx8uhjbtk wm-shine"/><path class="hqyg-9bir wm-k"/><path class="p0q2sxjnz wm-a"/><path class="ugzrm7bka wm-deco"/></g>`,
		"fallback": "withicons-kawaii:traffic-light",
	});
}

export default Component;
