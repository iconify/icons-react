import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwzr932tw.css';
import '../../css/s/s1cvkxb_m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwzr932tw"/><path class="s1cvkxb_m"/>`,
		"fallback": "devicon:opnsense-wordmark",
	});
}

export default Component;
