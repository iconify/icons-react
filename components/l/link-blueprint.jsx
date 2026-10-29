import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cl67d3edb.css';
import '../../css/d/d8p35_05q.css';
import '../../css/j/jy1aez1fn.css';
import '../../css/m/mgmiowbmj.css';
import '../../css/j/jcfvhdnpn.css';
import '../../css/f/fk_x1neis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cl67d3edb wm-deco"/><path class="d8p35_05q wm-deco"/><path class="jy1aez1fn wm-k"/><path class="mgmiowbmj wm-a"/><path class="jcfvhdnpn wm-k"/><path class="fk_x1neis wm-a"/></g>`,
		"fallback": "withicons:link-blueprint",
	});
}

export default Component;
