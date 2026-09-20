import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp7zg1bma.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp7zg1bma"/>`,
		"fallback": "pinhead:phone-bottom-right",
	});
}

export default Component;
