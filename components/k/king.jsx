import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0v5j32xh.css';
import '../../css/o/oyqn7db8r.css';
import '../../css/x/xh-5y4zrj.css';
import '../../css/f/f3dzgwbyc.css';
import '../../css/c/cltii3ber.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f0v5j32xh"/><path class="oyqn7db8r"/><path clip-rule="evenodd" class="xh-5y4zrj"/><path class="f3dzgwbyc"/><path class="cltii3ber"/></g>`,
		"fallback": "glyphs-poly:king",
	});
}

export default Component;
