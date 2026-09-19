import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fykosbbrv.css';
import '../../css/s/svhq3i9zq.css';
import '../../css/g/gezk6lbtr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 fykosbbrv"/><path class="clr-i-solid clr-i-solid-path-2 svhq3i9zq"/><path class="clr-i-solid clr-i-solid-path-3 gezk6lbtr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:slider-solid",
	});
}

export default Component;
