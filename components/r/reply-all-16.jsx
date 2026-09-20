import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxveumuww.css';
import '../../css/d/dekf_bboy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxveumuww"/><path class="dekf_bboy"/>`,
		"fallback": "qlementine-icons:reply-all-16",
	});
}

export default Component;
