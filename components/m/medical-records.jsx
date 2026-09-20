import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3avu39bx.css';
import '../../css/m/mgwh73i-d.css';
import '../../css/h/hyk4wfaif.css';
import '../../css/e/ehn65vx3h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3avu39bx"/><path class="mgwh73i-d"/><path class="hyk4wfaif"/><path class="ehn65vx3h"/>`,
		"fallback": "medical-icon:medical-records",
	});
}

export default Component;
