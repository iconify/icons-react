import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn6481bwr.css';
import '../../css/p/pxkrmsbhi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn6481bwr"/><path class="pxkrmsbhi"/>`,
		"fallback": "carbon:temperature-min",
	});
}

export default Component;
