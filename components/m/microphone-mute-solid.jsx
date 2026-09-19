import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic9831big.css';
import '../../css/a/aujrlr7yd.css';
import '../../css/o/o4nndobyg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ic9831big"/><path class="aujrlr7yd clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 o4nndobyg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:microphone-mute-solid",
	});
}

export default Component;
