import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twauhb0da.css';
import '../../css/h/h7czjmprx.css';

const viewBox = {"width":256,"height":274};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twauhb0da"/><path class="h7czjmprx"/>`,
		"fallback": "thesvg-color:krakenjs",
	});
}

export default Component;
