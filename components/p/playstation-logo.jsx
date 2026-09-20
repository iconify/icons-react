import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dmyketurs.css';
import '../../css/k/k125c794w.css';
import '../../css/t/t9vexcbvp.css';
import '../../css/c/c2vwqj_xf.css';
import '../../css/q/qt5qaac0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dmyketurs"/><path class="k125c794w"/><path class="t9vexcbvp"/><path class="c2vwqj_xf"/><path class="qt5qaac0h"/></g>`,
		"fallback": "streamline-logos:playstation-logo",
	});
}

export default Component;
