import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j245oinhx.css';
import '../../css/k/ko2oy2wgp.css';
import '../../css/s/so7n-kbcv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 j245oinhx"/><path class="clr-i-outline clr-i-outline-path-2 ko2oy2wgp"/><path class="clr-i-outline clr-i-outline-path-3 so7n-kbcv"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shuffle-line",
	});
}

export default Component;
