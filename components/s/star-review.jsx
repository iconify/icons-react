import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbv6tsbiz.css';
import '../../css/w/wtstr4z9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbv6tsbiz"/><path class="wtstr4z9r"/>`,
		"fallback": "carbon:star-review",
	});
}

export default Component;
