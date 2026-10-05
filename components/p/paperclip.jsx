import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fcy8up5fy.css';
import '../../css/x/x5ducvb9i.css';
import '../../css/a/a36t_bc_w.css';
import '../../css/s/sjk64dfcn.css';
import '../../css/x/xjgy_cbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fcy8up5fy"/><path class="x5ducvb9i"/><path class="a36t_bc_w"/><path class="sjk64dfcn"/><path class="xjgy_cbiu"/></g>`,
		"fallback": "matita:paperclip",
	});
}

export default Component;
