import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldq3ns_rs.css';
import '../../css/r/rxabmwl2z.css';
import '../../css/w/w5l9l10-p.css';
import '../../css/g/gug947obs.css';
import '../../css/v/v_aqbfbaf.css';
import '../../css/q/q2744t22g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 .047)scale(.93704)" class="ldq3ns_rs"><path class="rxabmwl2z"/><circle class="w5l9l10-p"/><circle class="gug947obs"/><circle class="v_aqbfbaf"/><circle class="q2744t22g"/></g>`,
		"fallback": "thesvg-color:twilio",
	});
}

export default Component;
