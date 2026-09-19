import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d1pfnyb3d.css';
import '../../css/q/q4qfmq08t.css';
import '../../css/r/ro7_s-blc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="d1pfnyb3d"/><path class="q4qfmq08t"/><path class="ro7_s-blc"/></g>`,
		"fallback": "circle-flags:lang-en-au",
	});
}

export default Component;
