import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7bj30f0q.css';
import '../../css/t/thj5gk-ag.css';
import '../../css/r/rututhb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w7bj30f0q"/><path class="thj5gk-ag"/><path class="rututhb5h"/>`,
		"fallback": "carbon:task-location",
	});
}

export default Component;
