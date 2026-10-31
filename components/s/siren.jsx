import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e7-3r-baw.css';
import '../../css/b/bhp95cbya.css';
import '../../css/w/w2zwoobcl.css';
import '../../css/l/l_qppnbap.css';
import '../../css/g/ga8oapics.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e7-3r-baw wm-shadow"/><path class="bhp95cbya wm-shadow"/><path class="w2zwoobcl"/><path class="l_qppnbap"/><path class="ga8oapics wm-s"/></g>`,
		"fallback": "withicons-brutal:siren",
	});
}

export default Component;
