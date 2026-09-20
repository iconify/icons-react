import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqnt3gb4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqnt3gb4f"/>`,
		"fallback": "rivet-icons:page-bottom",
	});
}

export default Component;
