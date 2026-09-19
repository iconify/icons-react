import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyv22vb3x.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/s/s64_1ebkq.css';
import '../../css/g/gg7u_jkqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyv22vb3x"/><path class="i7sr6ubzr"/><path class="s64_1ebkq"/><path class="gg7u_jkqs"/>`,
		"fallback": "gcp:speech-to-text",
	});
}

export default Component;
