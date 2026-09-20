import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu7p034nk.css';
import '../../css/b/b8kyosqzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu7p034nk"/><path class="b8kyosqzr"/>`,
		"fallback": "selfhst:mermaid",
	});
}

export default Component;
