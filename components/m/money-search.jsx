import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4y4x0zwd.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/z/zpat_pb-f.css';
import '../../css/l/l4p7rjbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a4y4x0zwd"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="zpat_pb-f"/><path class="l4p7rjbjb"/></g>`,
		"fallback": "andrsrxn:money-search",
	});
}

export default Component;
