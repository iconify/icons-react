import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ienuj02sj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ienuj02sj"/>`,
		"fallback": "teenyicons:mongodb-outline",
	});
}

export default Component;
