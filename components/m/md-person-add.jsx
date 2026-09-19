import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaur_9bvy.css';
import '../../css/f/f46yzabqh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaur_9bvy"/><path class="f46yzabqh"/>`,
		"fallback": "ion:md-person-add",
	});
}

export default Component;
