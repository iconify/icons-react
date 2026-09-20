import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-lbsdbjs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i-lbsdbjs"/>`,
		"fallback": "teenyicons:pause-small-solid",
	});
}

export default Component;
