import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_mz_z.css';
import '../../css/i/iw1iew.css';
import '../../css/l/lycpvr.css';
import '../../css/y/y4wbml.css';
import '../../css/s/sxou1t.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_mz_z iw1iew"/><path class="iw1iew lycpvr y4wbml"/><path class="iw1iew sxou1t y4wbml"/>`,
		"fallback": "line-md:phone-call-filled",
	});
}

export default Component;
