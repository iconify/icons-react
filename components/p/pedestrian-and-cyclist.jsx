import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbh-kn0cw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbh-kn0cw"/>`,
		"fallback": "temaki:pedestrian-and-cyclist",
	});
}

export default Component;
