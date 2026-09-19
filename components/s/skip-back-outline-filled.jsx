import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xicmvlq6m.css';
import '../../css/r/rbg5afbtd.css';
import '../../css/h/h48i3bcrj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xicmvlq6m"/><path class="rbg5afbtd"/><path class="h48i3bcrj"/>`,
		"fallback": "carbon:skip-back-outline-filled",
	});
}

export default Component;
