import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g2wm8j_sc.css';
import '../../css/b/b9l7o3qfq.css';
import '../../css/w/w-56ixblp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g2wm8j_sc"/><path class="b9l7o3qfq"/><ellipse class="w-56ixblp"/></g>`,
		"fallback": "si-glyph:old-phone",
	});
}

export default Component;
