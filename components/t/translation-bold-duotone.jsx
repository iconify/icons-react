import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lah7sdbbl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/yiruukb8q.css';
import '../../css/l/lc80znbzq.css';
import '../../css/s/slwcshstv.css';
import '../../css/p/p0cyqhbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lah7sdbbl"/><g class="xtpeb-edw"><path class="yiruukb8q"/><path class="lc80znbzq"/><path class="slwcshstv"/><path class="p0cyqhbjh"/></g>`,
		"fallback": "solar:translation-bold-duotone",
	});
}

export default Component;
