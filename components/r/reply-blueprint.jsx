import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nat81jbfq.css';
import '../../css/o/oqxweacyl.css';
import '../../css/l/l12sk0-nd.css';
import '../../css/k/kfe9-3bvk.css';
import '../../css/n/ntrpu2kes.css';
import '../../css/y/ym8flzbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nat81jbfq wm-deco"/><path class="oqxweacyl wm-deco"/><path class="l12sk0-nd wm-k"/><path class="kfe9-3bvk wm-a"/><path class="ntrpu2kes wm-k"/><path class="wm-a ym8flzbsz"/></g>`,
		"fallback": "withicons:reply-blueprint",
	});
}

export default Component;
