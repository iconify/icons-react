import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thw6rvjmr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thw6rvjmr"/>`,
		"fallback": "carbon:model",
	});
}

export default Component;
