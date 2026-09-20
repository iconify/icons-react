import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg0vg_p2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yg0vg_p2a"/>`,
		"fallback": "streamline-block:smileys-neutral",
	});
}

export default Component;
