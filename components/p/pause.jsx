import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3s1pbcbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3s1pbcbn"/>`,
		"fallback": "icomoon-free:pause",
	});
}

export default Component;
