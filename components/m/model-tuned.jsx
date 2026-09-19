import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g15uk9bud.css';
import '../../css/u/u-p-xwb0a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g15uk9bud"/><path class="u-p-xwb0a"/>`,
		"fallback": "carbon:model-tuned",
	});
}

export default Component;
