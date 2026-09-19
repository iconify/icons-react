import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg2ssfjpr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg2ssfjpr"/>`,
		"fallback": "fa7-brands:kakao-talk",
	});
}

export default Component;
