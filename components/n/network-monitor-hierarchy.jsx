import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fj2aepxnb.css';
import '../../css/w/wkm8g4n0v.css';
import '../../css/r/r9cf3q7gy.css';
import '../../css/v/v9-i1tkuh.css';
import '../../css/g/garmiob1o.css';
import '../../css/s/sn_rwqbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fj2aepxnb"/><path clip-rule="evenodd" class="wkm8g4n0v"/><path class="r9cf3q7gy"/><path class="v9-i1tkuh"/><path clip-rule="evenodd" class="garmiob1o"/><path clip-rule="evenodd" class="sn_rwqbjp"/></g>`,
		"fallback": "streamline-freehand-color:network-monitor-hierarchy",
	});
}

export default Component;
