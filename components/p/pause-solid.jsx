import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_nrh1bxn.css';
import '../../css/j/jqv_-8bsz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="clr-i-solid clr-i-solid-path-1 q_nrh1bxn"/><rect class="clr-i-solid clr-i-solid-path-2 jqv_-8bsz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pause-solid",
	});
}

export default Component;
