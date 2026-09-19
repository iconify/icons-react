import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxlwz1bsp.css';
import '../../css/u/ua6u3wino.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxlwz1bsp"/><path class="ua6u3wino"/>`,
		"fallback": "carbon:text-mining-applier",
	});
}

export default Component;
