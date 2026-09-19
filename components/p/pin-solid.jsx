import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c18-773sn.css';
import '../../css/c/cngrvbctu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c18-773sn clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 cngrvbctu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pin-solid",
	});
}

export default Component;
