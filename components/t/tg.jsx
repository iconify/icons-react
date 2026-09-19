import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxu_pgbcq.css';
import '../../css/w/wofugscov.css';
import '../../css/m/mrqz9mb6c.css';
import '../../css/l/ldoup0bcb.css';

const viewBox = {"width":300,"height":187};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxu_pgbcq"/><path class="wofugscov"/><path class="mrqz9mb6c"/><path class="ldoup0bcb"/></g>`,
		"fallback": "cif:tg",
	});
}

export default Component;
