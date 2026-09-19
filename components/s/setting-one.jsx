import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s9uhsrbom.css';
import '../../css/v/v3q5wob3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="s9uhsrbom"/><path class="v3q5wob3k"/></g>`,
		"fallback": "icon-park-outline:setting-one",
	});
}

export default Component;
