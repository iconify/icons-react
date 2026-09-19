import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt_isbccr.css';
import '../../css/g/gi_g19bwq.css';
import '../../css/h/hz35m3bwu.css';
import '../../css/y/yfygjjlft.css';
import '../../css/n/n9urvbcdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt_isbccr"/><path class="gi_g19bwq"/><path class="hz35m3bwu"/><path class="yfygjjlft"/><path class="n9urvbcdr"/>`,
		"fallback": "ion:social-bitcoin-outline",
	});
}

export default Component;
