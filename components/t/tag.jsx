import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iul73ibuo.css';

const viewBox = {"width":740,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iul73ibuo"/>`,
		"fallback": "il:tag",
	});
}

export default Component;
