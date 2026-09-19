import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcm29cc_g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcm29cc_g"/>`,
		"fallback": "bi:umbrella-fill",
	});
}

export default Component;
