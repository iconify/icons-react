import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck8kczb8t.css';
import '../../css/c/c-tt48brq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck8kczb8t"/><circle class="c-tt48brq"/>`,
		"fallback": "ooui:user-mentor-rtl",
	});
}

export default Component;
