import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga129acjs.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga129acjs"/>`,
		"fallback": "ps:viddler",
	});
}

export default Component;
