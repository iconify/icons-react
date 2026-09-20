import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn-xiyb0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn-xiyb0o"/>`,
		"fallback": "roentgen:triangle-small",
	});
}

export default Component;
