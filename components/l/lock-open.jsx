import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1q9abne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg1q9abne"/>`,
		"fallback": "heroicons-solid:lock-open",
	});
}

export default Component;
