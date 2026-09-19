import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dssdhk--f.css';
import '../../css/q/qdx9216tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dssdhk--f"/><path class="qdx9216tq"/></g>`,
		"fallback": "hugeicons:skype",
	});
}

export default Component;
