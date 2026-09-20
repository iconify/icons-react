import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gky5p7x4z.css';
import '../../css/i/im5j4qgvv.css';
import '../../css/a/aebl4yb_c.css';
import '../../css/t/t4-s2vb6s.css';
import '../../css/r/rb0ck8bsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gky5p7x4z"/><path class="im5j4qgvv"/><path class="aebl4yb_c"/><path class="t4-s2vb6s"/><path class="rb0ck8bsp"/>`,
		"fallback": "selfhst:watchtower",
	});
}

export default Component;
