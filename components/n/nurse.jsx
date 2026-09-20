import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7z45hb6b.css';
import '../../css/s/s7g2vkbcj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7z45hb6b"/><path class="s7g2vkbcj"/>`,
		"fallback": "vaadin:nurse",
	});
}

export default Component;
