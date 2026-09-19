import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q_9ijrbcu.css';
import '../../css/r/rgl9fpvyd.css';
import '../../css/k/k6ez71jyj.css';
import '../../css/b/bjq9wvlnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="q_9ijrbcu"/><path class="rgl9fpvyd"/><path class="k6ez71jyj"/><path class="bjq9wvlnf"/></g>`,
		"fallback": "circle-flags:np",
	});
}

export default Component;
