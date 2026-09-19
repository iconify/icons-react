import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikuckebwq.css';
import '../../css/r/r1o9g9byu.css';
import '../../css/g/gad0czbfs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikuckebwq"/><path class="r1o9g9byu"/><path class="gad0czbfs"/>`,
		"fallback": "carbon:user-military",
	});
}

export default Component;
