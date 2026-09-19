import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugzeqobnn.css';
import '../../css/l/lgnyah4qd.css';
import '../../css/s/s7fv67t6j.css';
import '../../css/d/dodgbvp5i.css';
import '../../css/r/r1jj-i9hv.css';
import '../../css/t/thwemd3eh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugzeqobnn"/><path class="lgnyah4qd"/><path class="s7fv67t6j"/><path class="dodgbvp5i"/><path class="r1jj-i9hv"/><circle class="thwemd3eh"/></g>`,
		"fallback": "icon-park:slave",
	});
}

export default Component;
