import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spnf93r-f.css';
import '../../css/x/xh76--bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="spnf93r-f"/><path class="wm-s xh76--bfd"/></g>`,
		"fallback": "withicons:phone-forwarded",
	});
}

export default Component;
