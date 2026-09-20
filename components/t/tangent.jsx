import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1u_h8b7d.css';
import '../../css/w/wr8acnbaf.css';
import '../../css/g/gwbv7zb2x.css';
import '../../css/g/gr7d5sbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="p1u_h8b7d"/><path class="wr8acnbaf"/><circle class="gwbv7zb2x"/><path class="gr7d5sbmh"/></g>`,
		"fallback": "lucide:tangent",
	});
}

export default Component;
