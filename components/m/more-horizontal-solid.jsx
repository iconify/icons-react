import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0ccmcb0n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0ccmcb0n"/>`,
		"fallback": "teenyicons:more-horizontal-solid",
	});
}

export default Component;
