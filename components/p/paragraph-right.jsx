import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmsa-7c1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmsa-7c1w"/>`,
		"fallback": "icomoon-free:paragraph-right",
	});
}

export default Component;
