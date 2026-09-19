import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e984jd2wf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e984jd2wf"/>`,
		"fallback": "bi:shield-fill-exclamation",
	});
}

export default Component;
