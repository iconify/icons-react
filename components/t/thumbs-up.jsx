import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj2v90w6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj2v90w6m"/>`,
		"fallback": "rivet-icons:thumbs-up",
	});
}

export default Component;
