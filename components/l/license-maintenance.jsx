import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq9mtny3q.css';
import '../../css/d/dt0zo1djr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq9mtny3q"/><path class="dt0zo1djr"/>`,
		"fallback": "carbon:license-maintenance",
	});
}

export default Component;
