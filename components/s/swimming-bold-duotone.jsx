import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wqc26mdly.css';
import '../../css/x/xun4g8t8p.css';
import '../../css/p/pql1o1cgo.css';
import '../../css/e/eh3neo0je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="wqc26mdly"/><path class="xun4g8t8p"/></g><path class="pql1o1cgo"/><path class="eh3neo0je"/>`,
		"fallback": "solar:swimming-bold-duotone",
	});
}

export default Component;
