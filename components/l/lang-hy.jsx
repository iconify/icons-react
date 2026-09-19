import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/ftcyrvb-q.css';
import '../../css/b/bwdxsg6jt.css';
import '../../css/t/t4wur0y1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ftcyrvb-q"/><path class="bwdxsg6jt"/><path class="t4wur0y1b"/></g>`,
		"fallback": "circle-flags:lang-hy",
	});
}

export default Component;
