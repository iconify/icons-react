import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmlcmxzsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmlcmxzsv"/>`,
		"fallback": "streamline:interface-bookmark-bookmarks-tags-favorite",
	});
}

export default Component;
