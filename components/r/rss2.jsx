import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvuwjbb0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvuwjbb0g"/>`,
		"fallback": "icomoon-free:rss2",
	});
}

export default Component;
