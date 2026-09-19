import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvk4zyyjc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvk4zyyjc"/>`,
		"fallback": "icomoon-free:mail2",
	});
}

export default Component;
