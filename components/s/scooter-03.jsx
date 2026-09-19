import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/npzbi206w.css';
import '../../css/r/r57mz8oti.css';
import '../../css/r/riam8ubfn.css';
import '../../css/q/qar-z4unx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="npzbi206w"/><path class="r57mz8oti"/><path class="riam8ubfn"/><path class="qar-z4unx"/></g>`,
		"fallback": "hugeicons:scooter-03",
	});
}

export default Component;
