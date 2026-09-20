import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f80m4wbpg.css';
import '../../css/l/lx7tpib3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="f80m4wbpg"/><path class="lx7tpib3g"/></g>`,
		"fallback": "proicons:table-simple",
	});
}

export default Component;
