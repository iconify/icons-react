import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1n-pskbt.css';
import '../../css/y/yov2mac9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1n-pskbt"/><path class="yov2mac9k"/>`,
		"fallback": "carbon:sailboat-offshore",
	});
}

export default Component;
