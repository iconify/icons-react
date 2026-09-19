import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfl7fxybz.css';
import '../../css/u/ur154rbom.css';
import '../../css/w/wsnaudczl.css';
import '../../css/n/ns55fvgze.css';
import '../../css/p/pidhzkbvr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 rfl7fxybz"/><path class="clr-i-outline clr-i-outline-path-2 ur154rbom"/><path class="clr-i-outline clr-i-outline-path-3 wsnaudczl"/><path class="clr-i-outline clr-i-outline-path-4 ns55fvgze"/><path class="clr-i-outline clr-i-outline-path-5 pidhzkbvr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:license-line",
	});
}

export default Component;
