import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/whday0q0r.css';
import '../../css/g/gr1n697hq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/m/mx6-w3bja.css';
import '../../css/d/du2xnf0uv.css';
import '../../css/l/lt1s48p7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="whday0q0r wm-deco"/><path class="gr1n697hq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="mx6-w3bja wm-k"/><path class="du2xnf0uv wm-a"/><path class="lt1s48p7p wm-k"/></g>`,
		"fallback": "withicons:scale-blueprint",
	});
}

export default Component;
