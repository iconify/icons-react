import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_3r7i84j.css';
import '../../css/x/xils0pbhd.css';
import '../../css/q/qiuo-kbcb.css';
import '../../css/z/zjapbdb7d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_3r7i84j"/><path class="xils0pbhd"/><path class="qiuo-kbcb"/><path class="zjapbdb7d"/></g>`,
		"fallback": "glyphs:palette-duo",
	});
}

export default Component;
