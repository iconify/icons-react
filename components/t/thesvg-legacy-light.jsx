import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/soghoobqa.css';
import '../../css/g/go950ibtp.css';
import '../../css/q/q3cezkbtc.css';
import '../../css/i/i2k0e8bti.css';
import '../../css/t/ti-xpgb7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="soghoobqa"/><rect class="go950ibtp"/><rect class="q3cezkbtc"/><path class="i2k0e8bti"/><path class="ti-xpgb7o"/></g>`,
		"fallback": "thesvg-color:thesvg-legacy-light",
	});
}

export default Component;
