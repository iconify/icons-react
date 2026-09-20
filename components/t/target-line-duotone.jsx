import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/a/a4a_b-0qv.css';
import '../../css/b/bhbk5gbng.css';
import '../../css/x/xgidqptam.css';
import '../../css/i/iumgjes7h.css';
import '../../css/b/bphn3ebac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="a4a_b-0qv"/><path class="bhbk5gbng"/><path class="xgidqptam"/><path class="iumgjes7h"/><path class="bphn3ebac"/></g>`,
		"fallback": "solar:target-line-duotone",
	});
}

export default Component;
