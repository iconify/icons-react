import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsr7ujquy.css';
import '../../css/b/b42j7_b-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsr7ujquy"/><path class="b42j7_b-v"/>`,
		"fallback": "carbon:shopping-catalog",
	});
}

export default Component;
