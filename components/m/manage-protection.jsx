import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey3vbs2kb.css';
import '../../css/m/mx54xpbau.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey3vbs2kb"/><path class="mx54xpbau"/>`,
		"fallback": "carbon:manage-protection",
	});
}

export default Component;
