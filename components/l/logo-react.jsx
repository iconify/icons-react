import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw73jobqx.css';
import '../../css/r/ra2lh9qeu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw73jobqx"/><path class="ra2lh9qeu"/>`,
		"fallback": "carbon:logo-react",
	});
}

export default Component;
