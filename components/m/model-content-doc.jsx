import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ajanxdn.css';
import '../../css/b/b1_a9z27d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ajanxdn"/><path class="b1_a9z27d"/>`,
		"fallback": "carbon:model-content-doc",
	});
}

export default Component;
