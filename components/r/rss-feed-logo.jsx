import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qp2avq79j.css';
import '../../css/c/cmpud0cha.css';
import '../../css/u/uvj42v07t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qp2avq79j"/><path clip-rule="evenodd" class="cmpud0cha"/><path clip-rule="evenodd" class="uvj42v07t"/></g>`,
		"fallback": "streamline-logos:rss-feed-logo",
	});
}

export default Component;
