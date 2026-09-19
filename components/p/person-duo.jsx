import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp_xdkb2w.css';
import '../../css/o/o2nmv9vhr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qp_xdkb2w"/><path class="o2nmv9vhr"/></g>`,
		"fallback": "glyphs:person-duo",
	});
}

export default Component;
