import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3c_78bkn.css';
import '../../css/v/v758r-tyc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3c_78bkn"/><path class="v758r-tyc"/>`,
		"fallback": "carbon:shrink-screen",
	});
}

export default Component;
