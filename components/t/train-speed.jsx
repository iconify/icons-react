import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eef4yzd1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eef4yzd1p"/>`,
		"fallback": "carbon:train-speed",
	});
}

export default Component;
