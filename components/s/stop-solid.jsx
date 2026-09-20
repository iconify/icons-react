import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad0xoryqy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad0xoryqy"/>`,
		"fallback": "teenyicons:stop-solid",
	});
}

export default Component;
