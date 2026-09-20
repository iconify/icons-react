import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kra6u_baj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kra6u_baj"/>`,
		"fallback": "temaki:skiing",
	});
}

export default Component;
