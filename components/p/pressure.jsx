import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogq3q-bks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogq3q-bks"/>`,
		"fallback": "carbon:pressure",
	});
}

export default Component;
