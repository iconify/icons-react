import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2-1qwbgv.css';
import '../../css/r/r6h-a0bkr.css';
import '../../css/s/s-bn8xbic.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 t2-1qwbgv"/><path class="clr-i-solid clr-i-solid-path-2 r6h-a0bkr"/><path class="clr-i-solid clr-i-solid-path-3 s-bn8xbic"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:layers-solid",
	});
}

export default Component;
