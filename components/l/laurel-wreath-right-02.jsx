import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/ph9zb5ezv.css';
import '../../css/d/dzmfdo8-t.css';
import '../../css/r/r3p0fh-uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ph9zb5ezv"/><path class="dzmfdo8-t"/><path class="r3p0fh-uc"/></g>`,
		"fallback": "hugeicons:laurel-wreath-right-02",
	});
}

export default Component;
