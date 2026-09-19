import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1ch9w2el.css';
import '../../css/n/n4n5f992h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1ch9w2el"/><path class="n4n5f992h"/>`,
		"fallback": "carbon:settings-edit",
	});
}

export default Component;
