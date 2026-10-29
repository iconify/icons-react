import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urbrpw7fa.css';
import '../../css/o/ov5ep2g1e.css';
import '../../css/q/qtxam2b_t.css';
import '../../css/c/crin70bsf.css';
import '../../css/u/uysb1cbow.css';
import '../../css/w/wogcsn1_o.css';
import '../../css/g/gzzsexv6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urbrpw7fa wm-shadow"/><path class="ov5ep2g1e"/><path class="qtxam2b_t"/><path class="crin70bsf"/><path class="uysb1cbow"/><path class="wm-shine wogcsn1_o"/><path class="gzzsexv6d"/>`,
		"fallback": "withicons-plush:play",
	});
}

export default Component;
