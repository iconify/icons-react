import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpt0rl_0q.css';
import '../../css/s/sak0m1nef.css';
import '../../css/e/ef7x2zbjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="sak0m1nef"/><path class="ef7x2zbjy"/></g>`,
		"fallback": "icon-park-outline:vr-glasses",
	});
}

export default Component;
