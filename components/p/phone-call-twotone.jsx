import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/w/w7fwnq.css';
import '../../css/l/lycpvr.css';
import '../../css/y/y4wbml.css';
import '../../css/s/sxou1t.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew w7fwnq"/><path class="iw1iew lycpvr y4wbml"/><path class="iw1iew sxou1t y4wbml"/>`,
		"fallback": "line-md:phone-call-twotone",
	});
}

export default Component;
