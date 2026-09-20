import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/i/i2ecl6b1j.css';
import '../../css/t/t4wdc2soy.css';
import '../../css/x/x0kc_d1bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="i2ecl6b1j"/><path class="t4wdc2soy"/><path class="x0kc_d1bs"/></g>`,
		"fallback": "streamline-sharp-color:new-file",
	});
}

export default Component;
