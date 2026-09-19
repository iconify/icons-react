import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkb5fmb3g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkb5fmb3g"/>`,
		"fallback": "pepicons:star-filled",
	});
}

export default Component;
