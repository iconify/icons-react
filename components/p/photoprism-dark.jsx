import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxcfexb1s.css';

const viewBox = {"width":283.46,"height":283.46};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxcfexb1s"/>`,
		"fallback": "thesvg-color:photoprism-dark",
	});
}

export default Component;
