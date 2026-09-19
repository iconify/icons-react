import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bfcep9bgt.css';
import '../../css/o/oow-rkuph.css';
import '../../css/n/n8xx8xp7w.css';
import '../../css/i/iayoicczx.css';
import '../../css/d/dh5y7-b3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsRn0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsRn0)"><path class="bfcep9bgt"/><path class="oow-rkuph"/><path class="n8xx8xp7w"/><circle class="iayoicczx"/><path class="dh5y7-b3e"/></g>`,
		"fallback": "circle-flags:rn",
	});
}

export default Component;
