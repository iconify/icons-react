import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/ggh6580st.css';
import '../../css/h/h76cb7bbv.css';
import '../../css/m/mkklkdb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ggh6580st"/><path class="h76cb7bbv"/><path class="mkklkdb4p"/></g>`,
		"fallback": "hugeicons:moon-cloud-snow",
	});
}

export default Component;
