import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gptse9i4m.css';
import '../../css/d/d_y43xr2r.css';
import '../../css/i/igrcl-bdx.css';
import '../../css/s/s07l5sb7t.css';
import '../../css/x/xxtdwjbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gptse9i4m wm-shadow"/><path class="d_y43xr2r wm-shadow"/><path class="igrcl-bdx"/><path class="s07l5sb7t"/><path class="wm-s xxtdwjbdc"/></g>`,
		"fallback": "withicons-brutal:mail-warning",
	});
}

export default Component;
