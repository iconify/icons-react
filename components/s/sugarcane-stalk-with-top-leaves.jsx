import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-yr9xtxq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-yr9xtxq"/>`,
		"fallback": "pinhead:sugarcane-stalk-with-top-leaves",
	});
}

export default Component;
