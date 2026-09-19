import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/x/x-0eu9bvg.css';
import '../../css/p/p19dhob-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tcrnivb-g"/><path class="x-0eu9bvg"/><path class="p19dhob-j"/></g>`,
		"fallback": "hugeicons:mail-at-sign-01",
	});
}

export default Component;
