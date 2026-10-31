import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q7fwqs9ez.css';
import '../../css/k/k-y1mcqwj.css';
import '../../css/b/bysvqebda.css';
import '../../css/h/hozedccln.css';
import '../../css/n/nsr-9sb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q7fwqs9ez wm-shadow"/><path class="k-y1mcqwj wm-shadow"/><path class="bysvqebda"/><path class="hozedccln"/><path class="nsr-9sb8g"/></g>`,
		"fallback": "withicons-brutal:rocket",
	});
}

export default Component;
