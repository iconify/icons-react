import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhn1_ob-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhn1_ob-h"/>`,
		"fallback": "bi:shield-shaded",
	});
}

export default Component;
