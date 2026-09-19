import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydf994boj.css';
import '../../css/e/ev5zxibtw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydf994boj"/><path class="ev5zxibtw"/>`,
		"fallback": "carbon:logo-keybase",
	});
}

export default Component;
