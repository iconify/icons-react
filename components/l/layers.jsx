import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pv0o9f7eo.css';
import '../../css/a/at9730bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pv0o9f7eo"/><path class="at9730bgf"/></g>`,
		"fallback": "humbleicons:layers",
	});
}

export default Component;
