import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxlaslbqv.css';
import '../../css/f/f-sg0db9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxlaslbqv"/><path class="f-sg0db9s"/>`,
		"fallback": "carbon:repo-artifact",
	});
}

export default Component;
