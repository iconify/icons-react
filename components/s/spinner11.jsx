import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4_0get0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4_0get0g"/>`,
		"fallback": "icomoon-free:spinner11",
	});
}

export default Component;
