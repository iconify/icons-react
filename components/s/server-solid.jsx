import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcghx3zow.css';
import '../../css/i/it0_k2res.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 fcghx3zow"/><circle class="clr-i-solid clr-i-solid-path-2 it0_k2res"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:server-solid",
	});
}

export default Component;
