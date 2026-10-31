import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrwa0kb0o.css';
import '../../css/y/yp5j36b-n.css';
import '../../css/g/gjbcl_bbd.css';
import '../../css/u/u4nwn9bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hrwa0kb0o wm-shadow"/><path class="wm-shadow yp5j36b-n"/><path class="gjbcl_bbd"/><path class="u4nwn9bwk"/></g>`,
		"fallback": "withicons-brutal:water-balloon",
	});
}

export default Component;
