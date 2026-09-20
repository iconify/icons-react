import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by211rbfo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by211rbfo"/>`,
		"fallback": "pinhead:quadcopter-drone",
	});
}

export default Component;
