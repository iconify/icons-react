import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izkbg5b9e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="izkbg5b9e"/>`,
		"fallback": "teenyicons:ngc-solid",
	});
}

export default Component;
