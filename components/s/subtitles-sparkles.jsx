import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7iagwb-d.css';
import '../../css/s/s_pig6b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x7iagwb-d"/><path class="s_pig6b_s"/></g>`,
		"fallback": "keyline-icons:subtitles-sparkles",
	});
}

export default Component;
