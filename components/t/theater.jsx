import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyyaptw9m.css';
import '../../css/g/g2y0sfb3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyyaptw9m"/><path class="g2y0sfb3k"/>`,
		"fallback": "carbon:theater",
	});
}

export default Component;
