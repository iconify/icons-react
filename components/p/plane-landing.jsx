import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q48gvtsqs.css';
import '../../css/s/sxun92beu.css';
import '../../css/p/ptdetsbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q48gvtsqs wm-k"/><path class="sxun92beu wm-k"/><path class="ptdetsbsf wm-a"/>`,
		"fallback": "withicons-bauhaus:plane-landing",
	});
}

export default Component;
