import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si_hkos6h.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si_hkos6h"/>`,
		"fallback": "ls:pinterest",
	});
}

export default Component;
