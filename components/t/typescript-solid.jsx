import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipqw2w6vy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipqw2w6vy"/>`,
		"fallback": "teenyicons:typescript-solid",
	});
}

export default Component;
