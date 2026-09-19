import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jz44n7b-f.css';
import '../../css/v/v63iznx0b.css';
import '../../css/m/mhmz4p10r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jz44n7b-f"/><path class="v63iznx0b"/><path class="mhmz4p10r"/></g>`,
		"fallback": "hugeicons:locate-off",
	});
}

export default Component;
