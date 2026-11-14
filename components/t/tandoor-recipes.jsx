import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7_e5xbbg.css';
import '../../css/l/lke8sfb2b.css';
import '../../css/h/hya45hbax.css';
import '../../css/q/qqi_ahbwa.css';
import '../../css/c/cnou19b4m.css';
import '../../css/y/y1cvh44tl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w7_e5xbbg"/><path class="lke8sfb2b"/><path class="hya45hbax"/><path class="qqi_ahbwa"/><path class="cnou19b4m"/><path class="y1cvh44tl"/>`,
		"fallback": "selfhst:tandoor-recipes",
	});
}

export default Component;
