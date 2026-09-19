import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tfewneb6d.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/i/itpz-5bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tfewneb6d"/><path class="tcrnivb-g"/><path class="itpz-5bib"/></g>`,
		"fallback": "hugeicons:mail-reply-all-01",
	});
}

export default Component;
