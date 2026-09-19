import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qp5p3d7zu.css';
import '../../css/y/y617_9-kq.css';
import '../../css/i/i1bqeia1p.css';
import '../../css/w/w9i2fwb1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="qp5p3d7zu"/><path class="y617_9-kq"/><path class="i1bqeia1p"/><path class="w9i2fwb1a"/></g>`,
		"fallback": "circle-flags:lang-st",
	});
}

export default Component;
