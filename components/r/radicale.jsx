import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsnyatslk.css';
import '../../css/e/eacht384o.css';
import '../../css/e/eomgn6xaw.css';
import '../../css/v/vabgvhplk.css';
import '../../css/t/tawi2lsdc.css';
import '../../css/v/vr2clrb9d.css';

const viewBox = {"width":200,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsnyatslk"/><path class="eacht384o"/><g class="eomgn6xaw"><path class="vabgvhplk"/><path class="tawi2lsdc"/><path class="vr2clrb9d"/></g>`,
		"fallback": "thesvg-color:radicale",
	});
}

export default Component;
