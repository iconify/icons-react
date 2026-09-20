import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfsc7hb7y.css';
import '../../css/r/rr_pm1b7q.css';
import '../../css/u/ucafw4brw.css';
import '../../css/m/m11kaybbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfsc7hb7y"/><path class="rr_pm1b7q"/><path class="ucafw4brw"/><path clip-rule="evenodd" class="m11kaybbv"/>`,
		"fallback": "selfhst:koel",
	});
}

export default Component;
