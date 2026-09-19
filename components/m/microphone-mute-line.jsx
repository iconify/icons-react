import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic9831big.css';
import '../../css/a/as9o91e1g.css';
import '../../css/f/fgt-s_bka.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ic9831big"/><path class="as9o91e1g clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 fgt-s_bka"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:microphone-mute-line",
	});
}

export default Component;
