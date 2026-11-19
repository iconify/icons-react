import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7cs0_jfl.css';
import '../../css/e/ee7zd4bqr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7cs0_jfl"/><path class="ee7zd4bqr"/>`,
		"fallback": "devicon:qwen-wordmark",
	});
}

export default Component;
