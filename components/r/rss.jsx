import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvi1ht2vd.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvi1ht2vd"/>`,
		"fallback": "ps:rss",
	});
}

export default Component;
