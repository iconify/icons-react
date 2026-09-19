import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_hcr-bgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_hcr-bgd"/>`,
		"fallback": "file-icons:terser",
	});
}

export default Component;
