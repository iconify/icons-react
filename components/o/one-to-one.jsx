import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf6dffx8p.css';
import '../../css/g/gc8-4tb2b.css';
import '../../css/n/n7u8j-8_w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf6dffx8p"/><path class="gc8-4tb2b"/><path class="n7u8j-8_w"/>`,
		"fallback": "ant-design:one-to-one",
	});
}

export default Component;
