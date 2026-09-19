import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a3pa-kb4l.css';
import '../../css/e/emsvcrbze.css';
import '../../css/s/s7hk-ccff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="a3pa-kb4l"/><path class="emsvcrbze"/><path class="s7hk-ccff"/></g>`,
		"fallback": "covid:quarantine-place-time-calendar-1",
	});
}

export default Component;
