import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qsjo-k-pw.css';
import '../../css/h/hd19pub9w.css';
import '../../css/u/u2bl5bc3s.css';
import '../../css/f/f4rxfjfpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qsjo-k-pw"/><path class="hd19pub9w"/><path class="u2bl5bc3s"/><path class="f4rxfjfpz"/></g>`,
		"fallback": "circle-flags:tz",
	});
}

export default Component;
