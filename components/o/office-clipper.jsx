import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8z_old3b.css';
import '../../css/k/kuqu3-gbx.css';
import '../../css/b/b4mo-ib8s.css';
import '../../css/s/s0npv_cua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8z_old3b"/><path class="kuqu3-gbx"/><path class="b4mo-ib8s"/><path class="s0npv_cua"/></g>`,
		"fallback": "streamline-ultimate-color:office-clipper",
	});
}

export default Component;
