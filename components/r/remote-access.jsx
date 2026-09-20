import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xb1umdb7a.css';
import '../../css/j/jp0h4bekv.css';
import '../../css/n/n0ps3j8mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="xb1umdb7a"/><path class="jp0h4bekv"/><path class="n0ps3j8mv"/></g>`,
		"fallback": "streamline-ultimate:remote-access",
	});
}

export default Component;
