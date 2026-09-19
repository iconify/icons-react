import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-joq1b3b.css';
import '../../css/v/vcw2ztboc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-joq1b3b"/><path class="vcw2ztboc"/></g>`,
		"fallback": "fluent-emoji-flat:left-speech-bubble",
	});
}

export default Component;
