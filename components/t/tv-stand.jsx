import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b28k3ippi.css';
import '../../css/r/r_z0qdr1l.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b28k3ippi"/><path class="r_z0qdr1l"/></g>`,
		"fallback": "marketeq:tv-stand",
	});
}

export default Component;
