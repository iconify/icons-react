import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z4l1ukb1f.css';
import '../../css/m/m5fg6epse.css';
import '../../css/z/z3gnu0b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z4l1ukb1f"/><path class="m5fg6epse"/><path class="z3gnu0b-e"/></g>`,
		"fallback": "hugeicons:telescope-02",
	});
}

export default Component;
