import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/g/gi-oqebnd.css';
import '../../css/w/w5grt-bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="gi-oqebnd"/><path class="w5grt-bkg"/>`,
		"fallback": "solar:round-sort-horizontal-bold-duotone",
	});
}

export default Component;
