import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9iqk5btj.css';
import '../../css/g/gv0in5paf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rzs6hpcnk.css';
import '../../css/e/ejnry9hno.css';
import '../../css/x/xoxko-f4e.css';
import '../../css/d/dd5djv69b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9iqk5btj"/><path clip-rule="evenodd" class="gv0in5paf"/><g class="xtpeb-edw"><path class="rzs6hpcnk"/><path class="ejnry9hno"/><path class="xoxko-f4e"/><path class="dd5djv69b"/></g>`,
		"fallback": "solar:sun-bold-duotone",
	});
}

export default Component;
