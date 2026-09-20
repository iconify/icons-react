import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu20q1vfq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu20q1vfq"/>`,
		"fallback": "pinhead:person-behind-desk",
	});
}

export default Component;
