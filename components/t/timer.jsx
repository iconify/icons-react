import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exqw53b-w.css';
import '../../css/v/v2qi5lg1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exqw53b-w"/><path class="v2qi5lg1p"/>`,
		"fallback": "carbon:timer",
	});
}

export default Component;
