import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln8kehb4v.css';
import '../../css/h/hz4g9vbsl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln8kehb4v"/><path class="hz4g9vbsl"/>`,
		"fallback": "carbon:user-speaker",
	});
}

export default Component;
