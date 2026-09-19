import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4b3u2b6s.css';

const viewBox = {"width":1216,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4b3u2b6s"/>`,
		"fallback": "fa:tencent-weibo",
	});
}

export default Component;
