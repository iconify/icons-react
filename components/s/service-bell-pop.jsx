import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/f/fssymtbxz.css';
import '../../css/o/o5i6tenfz.css';
import '../../css/y/yj1klybou.css';
import '../../css/t/tceumrtfd.css';
import '../../css/l/lq426yb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="fssymtbxz"/><path class="o5i6tenfz"/><path class="yj1klybou"/><path class="tceumrtfd"/><path class="lq426yb_i"/></g>`,
		"fallback": "streamline-kameleon-color:service-bell-pop",
	});
}

export default Component;
