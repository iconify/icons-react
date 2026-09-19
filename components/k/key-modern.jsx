import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn2aw68ax.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn2aw68ax"/>`,
		"fallback": "at-icons:key-modern",
	});
}

export default Component;
