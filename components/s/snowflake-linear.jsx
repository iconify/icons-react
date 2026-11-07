import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yx7codbhz.css';
import '../../css/y/yn2dbebtk.css';
import '../../css/e/e-mft8bme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yx7codbhz"/><path class="yn2dbebtk"/><path class="e-mft8bme"/></g>`,
		"fallback": "solar:snowflake-linear",
	});
}

export default Component;
