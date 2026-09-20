import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srui7osvy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="srui7osvy"/>`,
		"fallback": "teenyicons:up-circle-solid",
	});
}

export default Component;
