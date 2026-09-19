import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_44nilr.css';
import '../../css/v/v9zanyf3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw_44nilr"/><path class="v9zanyf3o"/>`,
		"fallback": "icomoon-free:new-tab",
	});
}

export default Component;
