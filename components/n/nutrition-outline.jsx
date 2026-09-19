import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbcy72b_r.css';
import '../../css/q/q66ufvz7x.css';
import '../../css/g/g2xe6acff.css';
import '../../css/q/qyd3s_92q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbcy72b_r"/><path class="q66ufvz7x"/><ellipse class="g2xe6acff"/><ellipse class="qyd3s_92q"/>`,
		"fallback": "ion:nutrition-outline",
	});
}

export default Component;
