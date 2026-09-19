import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vhxa7cbtv.css';
import '../../css/r/rynlrf4lt.css';
import '../../css/b/bju6vld9y.css';
import '../../css/l/lv2bxciiq.css';
import '../../css/t/tvxvkwb8s.css';
import '../../css/q/q1uktub8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="vhxa7cbtv"/><path class="rynlrf4lt"/><path class="bju6vld9y"/><circle class="lv2bxciiq"/><circle class="tvxvkwb8s"/><circle class="q1uktub8f"/></g>`,
		"fallback": "circle-flags:lang-hi",
	});
}

export default Component;
