import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd_h-2b1r.css';
import '../../css/b/bbae6rbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd_h-2b1r"/><path class="bbae6rbgj"/>`,
		"fallback": "mingcute:rss-2-line",
	});
}

export default Component;
