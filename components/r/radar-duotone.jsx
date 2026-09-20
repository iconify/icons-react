import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgu19vbwy.css';
import '../../css/r/rwqf32bdv.css';
import '../../css/v/vj_4whbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgu19vbwy"/><path class="rwqf32bdv"/><path class="vj_4whbgq"/>`,
		"fallback": "stash:radar-duotone",
	});
}

export default Component;
