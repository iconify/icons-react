import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6jciybe.css';
import '../../css/n/nxbv23bie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6jciybe"/><path class="nxbv23bie"/>`,
		"fallback": "carbon:rss",
	});
}

export default Component;
