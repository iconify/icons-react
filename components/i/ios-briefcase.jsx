import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzgbqj-sb.css';
import '../../css/f/fkpqvet-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzgbqj-sb"/><path class="fkpqvet-p"/>`,
		"fallback": "ion:ios-briefcase",
	});
}

export default Component;
