import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7rrbjb3k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7rrbjb3k"/>`,
		"fallback": "icomoon-free:volume-mute2",
	});
}

export default Component;
