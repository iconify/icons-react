import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqau2tbwv.css';
import '../../css/i/ignagdcxc.css';
import '../../css/e/en3y03sqa.css';
import '../../css/v/vbjejdbwb.css';
import '../../css/h/hwf0jqgpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aqau2tbwv wm-shadow"/><path class="ignagdcxc wm-shadow"/><path class="en3y03sqa"/><path class="vbjejdbwb"/><path class="hwf0jqgpu"/></g>`,
		"fallback": "withicons-brutal:toggle",
	});
}

export default Component;
