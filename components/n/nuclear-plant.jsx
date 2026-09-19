import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2edn0hux.css';
import '../../css/b/b_jybabkd.css';
import '../../css/k/k4w29eh4l.css';
import '../../css/w/wphq51b4b.css';
import '../../css/h/h26ybb6-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q2edn0hux"/><path class="b_jybabkd"/><path class="k4w29eh4l"/><path class="wphq51b4b"/><circle class="h26ybb6-w"/></g>`,
		"fallback": "icon-park-outline:nuclear-plant",
	});
}

export default Component;
