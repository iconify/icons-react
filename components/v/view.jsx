import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lq98u_b3a.css';
import '../../css/d/dygpaf-cm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 4)" class="n1lsf0bnc"><path class="lq98u_b3a"/><ellipse class="dygpaf-cm"/></g>`,
		"fallback": "si-glyph:view",
	});
}

export default Component;
