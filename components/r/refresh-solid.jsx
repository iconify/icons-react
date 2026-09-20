import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkd2uny5m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wkd2uny5m"/>`,
		"fallback": "teenyicons:refresh-solid",
	});
}

export default Component;
