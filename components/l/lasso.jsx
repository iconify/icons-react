import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km4a1v4td.css';
import '../../css/f/ffx-w--7f.css';
import '../../css/b/b5779lb1f.css';
import '../../css/x/x_nsue7wp.css';
import '../../css/w/wr80zwb9p.css';
import '../../css/v/v1c0w6baz.css';
import '../../css/z/z5sjmjb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="km4a1v4td wm-k"/><path class="ffx-w--7f wm-k"/><path class="b5779lb1f wm-k"/><path class="wm-a x_nsue7wp"/><path class="wm-a wr80zwb9p"/><path class="v1c0w6baz wm-a"/><path class="wm-shine z5sjmjb1p"/></g>`,
		"fallback": "withicons-anime:lasso",
	});
}

export default Component;
