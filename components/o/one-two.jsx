import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkmm94b8m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkmm94b8m"/>`,
		"fallback": "pinhead:one-two",
	});
}

export default Component;
