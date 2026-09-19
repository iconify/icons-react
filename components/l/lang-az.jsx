import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/s6a5qcbmu.css';
import '../../css/g/g2p0iwbvv.css';
import '../../css/v/va-am1pst.css';
import '../../css/l/l5c1x-pnh.css';
import '../../css/j/j3tn0qbsz.css';
import '../../css/e/e54gbh12w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="s6a5qcbmu"/><path class="g2p0iwbvv"/><path class="va-am1pst"/><g class="l5c1x-pnh"><path class="j3tn0qbsz"/><path class="e54gbh12w"/></g></g>`,
		"fallback": "circle-flags:lang-az",
	});
}

export default Component;
