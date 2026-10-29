import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vuwhp5b7r.css';
import '../../css/r/rtaxn-aqg.css';
import '../../css/b/b5vz60bpb.css';
import '../../css/f/fyac2em6t.css';
import '../../css/u/urj9aic9t.css';
import '../../css/l/l6bimxj7c.css';
import '../../css/c/c4kg_ab1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vuwhp5b7r wm-deco"/><path class="rtaxn-aqg wm-deco"/><path class="b5vz60bpb wm-deco"/><path class="fyac2em6t wm-k"/><path class="urj9aic9t wm-a"/><path class="l6bimxj7c wm-k"/><path class="c4kg_ab1o wm-a"/></g>`,
		"fallback": "withicons:pen-line-blueprint",
	});
}

export default Component;
