import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtgmf5b6d.css';
import '../../css/x/x4ya1hbwl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtgmf5b6d"/><path class="x4ya1hbwl"/>`,
		"fallback": "carbon:scale",
	});
}

export default Component;
