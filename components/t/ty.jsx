import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/kxsssdlck.css';
import '../../css/i/i8tqr6-ut.css';
import '../../css/e/e0dq_9zkw.css';
import '../../css/w/w0cmr7w6u.css';
import '../../css/o/or-5gfbmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsTy0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsTy0)"><path class="kxsssdlck"/><path class="i8tqr6-ut"/><path class="e0dq_9zkw"/><path class="w0cmr7w6u"/><path class="or-5gfbmd"/></g>`,
		"fallback": "circle-flags:ty",
	});
}

export default Component;
