import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j432o5vub.css';
import '../../css/i/i5ssqcpbz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 j432o5vub"/><rect class="clr-i-solid clr-i-solid-path-2 i5ssqcpbz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:step-forward-solid",
	});
}

export default Component;
