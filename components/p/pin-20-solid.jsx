import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsq404tth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsq404tth"/>`,
		"fallback": "sidekickicons:pin-20-solid",
	});
}

export default Component;
