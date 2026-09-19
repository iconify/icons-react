import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0gdj8rcq.css';
import '../../css/b/bekcrac2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i0gdj8rcq"/><path class="bekcrac2g"/></g>`,
		"fallback": "covid:social-distancing-woman",
	});
}

export default Component;
