import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkard0b0m.css';
import '../../css/x/xfo5eibbw.css';
import '../../css/s/sac1lebmg.css';
import '../../css/r/rgiiqkmbq.css';
import '../../css/w/wfbaofbct.css';
import '../../css/l/l_2lnybef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkard0b0m"/><path class="xfo5eibbw"/><path class="sac1lebmg"/><path class="rgiiqkmbq"/><path class="wfbaofbct"/><path class="l_2lnybef"/></g>`,
		"fallback": "fluent-emoji-flat:ship",
	});
}

export default Component;
