import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/x/xgefj9bwf.css';
import '../../css/z/zw0l5dben.css';
import '../../css/m/mn2kr9b5p.css';
import '../../css/z/zjbiaw26c.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="xgefj9bwf"/><path class="zw0l5dben"/><path class="mn2kr9b5p"/><path class="zjbiaw26c"/></g>`,
		"fallback": "streamline-stickies-color:money-coin-2-duo",
	});
}

export default Component;
