import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6zmjje5d.css';
import '../../css/y/yr811vbtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6zmjje5d"/><path class="yr811vbtg"/>`,
		"fallback": "carbon:keyboard",
	});
}

export default Component;
