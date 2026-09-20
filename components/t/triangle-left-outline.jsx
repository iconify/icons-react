import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh7vgbb4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh7vgbb4a"/>`,
		"fallback": "pinhead:triangle-left-outline",
	});
}

export default Component;
