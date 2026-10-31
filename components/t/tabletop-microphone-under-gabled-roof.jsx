import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg5o3i7gs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg5o3i7gs"/>`,
		"fallback": "pinhead:tabletop-microphone-under-gabled-roof",
	});
}

export default Component;
