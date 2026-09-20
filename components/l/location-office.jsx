import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lhqeb58hl.css';
import '../../css/t/t0gv9xn8e.css';
import '../../css/b/bs_kf6bpt.css';
import '../../css/b/bx2c1bcox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lhqeb58hl"/><path class="t0gv9xn8e"/><path class="bs_kf6bpt"/><path class="bx2c1bcox"/></g>`,
		"fallback": "streamline-sharp-color:location-office",
	});
}

export default Component;
