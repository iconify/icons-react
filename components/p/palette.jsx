import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6sydbcdf.css';
import '../../css/x/xf81mwtku.css';
import '../../css/x/xyeev7s4v.css';
import '../../css/s/ss47qtbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6sydbcdf"/><path class="xf81mwtku"/><path class="xyeev7s4v"/><path class="ss47qtbux"/></g>`,
		"fallback": "tdesign:palette",
	});
}

export default Component;
