import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9-6onlzi.css';
import '../../css/i/i7dr051db.css';
import '../../css/q/qe60n2b7a.css';
import '../../css/e/ejdenbgzh.css';
import '../../css/m/m6tc1nb3o.css';
import '../../css/g/g-0_lkbmi.css';
import '../../css/i/ijnc63qbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9-6onlzi"/><path class="i7dr051db"/><path class="qe60n2b7a"/><path class="ejdenbgzh"/><path class="m6tc1nb3o"/><path class="g-0_lkbmi"/><path class="ijnc63qbw"/>`,
		"fallback": "fxemoji:milkyway",
	});
}

export default Component;
