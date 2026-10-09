import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwun26bcz.css';
import '../../css/b/buzpo8b_c.css';
import '../../css/y/yayoa0eev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwun26bcz"/><path class="buzpo8b_c"/><path class="yayoa0eev"/>`,
		"fallback": "energy-icons:jack-up-vessel-48-bold",
	});
}

export default Component;
