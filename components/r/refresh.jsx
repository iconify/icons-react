import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr8trj8pf.css';
import '../../css/n/nvor0_msi.css';
import '../../css/o/oz_5o-o8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wr8trj8pf"/><path class="nvor0_msi"/><path class="oz_5o-o8f"/></g>`,
		"fallback": "mynaui:refresh",
	});
}

export default Component;
