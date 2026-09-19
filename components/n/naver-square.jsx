import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiy1i9ggn.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiy1i9ggn"/>`,
		"fallback": "vs:naver-square",
	});
}

export default Component;
