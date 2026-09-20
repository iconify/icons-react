import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trxxdqrhi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trxxdqrhi"/>`,
		"fallback": "teenyicons:thumb-up-solid",
	});
}

export default Component;
