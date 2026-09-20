import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/n-f7_n.css';
import '../../css/x/x5jt8i.css';
import '../../css/y/y4wbml.css';
import '../../css/g/g5y2dq.css';
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
		"content": `<path class="iw1iew n-f7_n"/><path class="iw1iew x5jt8i y4wbml"/><path class="g5y2dq iw1iew y4wbml"/>`,
		"fallback": "line-md:phone-add-twotone",
	});
}

export default Component;
