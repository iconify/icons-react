import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rr1xybbeg.css';
import '../../css/x/xbu2w4wpm.css';
import '../../css/a/ahtpa2bco.css';
import '../../css/i/iztf4f7lf.css';
import '../../css/g/gp5_u6bnd.css';
import '../../css/p/psus5pr8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rr1xybbeg wm-shadow"/><path class="wm-shadow xbu2w4wpm"/><path class="ahtpa2bco"/><path class="iztf4f7lf"/><path class="gp5_u6bnd"/><path class="psus5pr8r"/></g>`,
		"fallback": "withicons-brutal:santa-hat",
	});
}

export default Component;
