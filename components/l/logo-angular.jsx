import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6ebachz.css';
import '../../css/z/zeqvi16vh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6ebachz"/><path class="zeqvi16vh"/>`,
		"fallback": "carbon:logo-angular",
	});
}

export default Component;
