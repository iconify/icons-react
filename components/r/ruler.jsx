import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to63unrdf.css';
import '../../css/s/s8zdzyb4g.css';
import '../../css/q/q6h2ko6vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to63unrdf wm-k"/><path class="s8zdzyb4g wm-k"/><path class="q6h2ko6vi wm-a"/>`,
		"fallback": "withicons-bauhaus:ruler",
	});
}

export default Component;
