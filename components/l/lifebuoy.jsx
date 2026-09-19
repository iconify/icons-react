import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsdnl787g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsdnl787g"/>`,
		"fallback": "icomoon-free:lifebuoy",
	});
}

export default Component;
