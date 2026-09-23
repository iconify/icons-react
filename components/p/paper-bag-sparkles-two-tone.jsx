import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1a5rjwjp.css';
import '../../css/a/ai5f1achb.css';
import '../../css/w/wmmy0pb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s1a5rjwjp"/><path class="ai5f1achb"/><path class="wmmy0pb_j"/></g>`,
		"fallback": "keyline-icons:paper-bag-sparkles-two-tone",
	});
}

export default Component;
