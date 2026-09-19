import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcbt7yjkc.css';
import '../../css/s/sq6-edbzr.css';
import '../../css/b/bgw48cfvv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcbt7yjkc"/><path class="sq6-edbzr"/><path class="bgw48cfvv"/>`,
		"fallback": "devicon:labview",
	});
}

export default Component;
