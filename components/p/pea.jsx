import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_5wk7bvq.css';
import '../../css/v/vn-sww8pp.css';
import '../../css/f/fodjydsnw.css';
import '../../css/w/w8lmf2b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_5wk7bvq"/><path class="vn-sww8pp"/><path class="fodjydsnw"/><path class="w8lmf2b2v"/></g>`,
		"fallback": "tdesign:pea",
	});
}

export default Component;
