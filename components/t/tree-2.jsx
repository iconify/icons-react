import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc-i84tkw.css';
import '../../css/l/lrw9mobvn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="sc-i84tkw"/><path class="lrw9mobvn"/></g>`,
		"fallback": "glyphs-poly:tree-2",
	});
}

export default Component;
