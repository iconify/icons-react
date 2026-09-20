import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ars0csbok.css';
import '../../css/w/wuxne-bcb.css';
import '../../css/o/owmyuv0ev.css';

const viewBox = {"width":25.9,"height":38};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ars0csbok"/><path class="wuxne-bcb"/><path class="owmyuv0ev"/>`,
		"fallback": "thesvg-color:tripletex",
	});
}

export default Component;
