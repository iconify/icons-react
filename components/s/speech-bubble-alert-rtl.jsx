import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-e8ugb3c.css';
import '../../css/d/d-svt8bha.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-e8ugb3c"/><path class="d-svt8bha"/>`,
		"fallback": "ooui:speech-bubble-alert-rtl",
	});
}

export default Component;
