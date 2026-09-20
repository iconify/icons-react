import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsgvqsbiw.css';
import '../../css/n/no17qlb2l.css';

const viewBox = {"width":19,"height":19};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rsgvqsbiw"/><path class="no17qlb2l"/></g>`,
		"fallback": "thesvg-color:mintlify",
	});
}

export default Component;
