import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iv6gf1g5l.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/v/vc8ie36qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="iv6gf1g5l"/><path class="tcrnivb-g"/><path class="vc8ie36qx"/></g>`,
		"fallback": "hugeicons:mail-download-01",
	});
}

export default Component;
