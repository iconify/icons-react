import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ukuc7qb5n.css';
import '../../css/f/ftcwonqjb.css';
import '../../css/r/r37nhz6_h.css';
import '../../css/y/ys1ggcoki.css';
import '../../css/u/uy8u3ybxe.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ukuc7qb5n"/><path class="ftcwonqjb"/><path class="r37nhz6_h"/><path class="ys1ggcoki"/><path class="uy8u3ybxe"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:repeat-circle",
	});
}

export default Component;
