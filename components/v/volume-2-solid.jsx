import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czrn7qbsc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czrn7qbsc"/>`,
		"fallback": "teenyicons:volume-2-solid",
	});
}

export default Component;
