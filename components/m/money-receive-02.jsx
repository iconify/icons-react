import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgjt86b_x.css';
import '../../css/j/j-xixqece.css';
import '../../css/c/cbn7vebrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pgjt86b_x"/><path class="j-xixqece"/><path class="cbn7vebrq"/></g>`,
		"fallback": "hugeicons:money-receive-02",
	});
}

export default Component;
