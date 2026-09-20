import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs34pbf6d.css';
import '../../css/z/zd_6bjlub.css';
import '../../css/c/cyzewcv6s.css';
import '../../css/u/u-_tkm43t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="fs34pbf6d"/><path class="zd_6bjlub"/><path class="cyzewcv6s"/><path class="u-_tkm43t"/></g>`,
		"fallback": "skill-icons:verilog",
	});
}

export default Component;
