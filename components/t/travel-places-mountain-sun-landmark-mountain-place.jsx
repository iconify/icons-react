import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b8agt59nb.css';
import '../../css/k/ko9ijwb2u.css';
import '../../css/d/d3d2-0p_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b8agt59nb"/><path class="ko9ijwb2u"/><circle class="d3d2-0p_d"/></g>`,
		"fallback": "streamline:travel-places-mountain-sun-landmark-mountain-place",
	});
}

export default Component;
