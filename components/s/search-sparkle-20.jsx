import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6amyqet.css';
import '../../css/y/yoyl5gbhe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6amyqet"/><path class="yoyl5gbhe"/>`,
		"fallback": "energy-icons:search-sparkle-20",
	});
}

export default Component;
