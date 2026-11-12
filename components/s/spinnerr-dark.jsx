import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu3j08bot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu3j08bot"/>`,
		"fallback": "selfhst:spinnerr-dark",
	});
}

export default Component;
