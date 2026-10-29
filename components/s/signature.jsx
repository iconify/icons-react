import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1j6pgh3s.css';
import '../../css/r/rihlu-b6l.css';
import '../../css/w/w6zl52bkl.css';
import '../../css/z/z0cvyxymj.css';
import '../../css/w/w6uug-bhh.css';
import '../../css/c/csge9hrsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1j6pgh3s wm-k"/><path class="rihlu-b6l wm-k"/><path class="w6zl52bkl wm-k"/><path class="wm-a z0cvyxymj"/><path class="w6uug-bhh wm-a"/><path class="csge9hrsb wm-a"/></g>`,
		"fallback": "withicons-anime:signature",
	});
}

export default Component;
