import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xrj1w3ubs.css';
import '../../css/e/e7-vbdckg.css';
import '../../css/b/b2n3vku2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKv0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKv0)"><path class="xrj1w3ubs"/><path class="e7-vbdckg"/><path class="b2n3vku2e"/></g>`,
		"fallback": "circle-flags:kv",
	});
}

export default Component;
