import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqsth4bzo.css';
import '../../css/l/linospgqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqsth4bzo"/><path class="linospgqs"/>`,
		"fallback": "energy-icons:plunger-48",
	});
}

export default Component;
