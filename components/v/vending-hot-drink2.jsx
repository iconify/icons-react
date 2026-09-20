import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_3ltgb8o.css';
import '../../css/o/o9p1ubbpm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_3ltgb8o"/><path class="o9p1ubbpm"/>`,
		"fallback": "temaki:vending-hot-drink2",
	});
}

export default Component;
