import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hmvhi_23u.css';
import '../../css/c/cf2tf5pwq.css';
import '../../css/r/rnhk2mguh.css';
import '../../css/j/jz7z3z14u.css';
import '../../css/e/exg8hy4no.css';
import '../../css/f/fofnbbc3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hmvhi_23u"/><path class="cf2tf5pwq"/><path class="rnhk2mguh"/><path class="jz7z3z14u"/><path class="exg8hy4no"/><path class="fofnbbc3d"/></g>`,
		"fallback": "matita:languages",
	});
}

export default Component;
