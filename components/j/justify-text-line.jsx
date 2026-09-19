import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezdbvub1b.css';
import '../../css/d/d_rewb9zs.css';
import '../../css/w/wv_fwkdwt.css';
import '../../css/q/qm-4xz3np.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ezdbvub1b"/><path class="clr-i-outline clr-i-outline-path-2 d_rewb9zs"/><path class="clr-i-outline clr-i-outline-path-3 wv_fwkdwt"/><path class="clr-i-outline clr-i-outline-path-4 qm-4xz3np"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:justify-text-line",
	});
}

export default Component;
