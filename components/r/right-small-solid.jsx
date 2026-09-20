import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaugi6cfq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaugi6cfq"/>`,
		"fallback": "teenyicons:right-small-solid",
	});
}

export default Component;
