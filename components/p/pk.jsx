import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/i/ihfx7jbtq.css';
import '../../css/r/r17ikubfc.css';
import '../../css/x/xwkhy7b0j.css';
import '../../css/x/xbq95kogh.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="ihfx7jbtq"/><circle class="r17ikubfc"/><circle class="xwkhy7b0j"/><path class="xbq95kogh"/></g>`,
		"fallback": "cif:pk",
	});
}

export default Component;
