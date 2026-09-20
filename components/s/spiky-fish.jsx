import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxk-8hbut.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxk-8hbut"/>`,
		"fallback": "pinhead:spiky-fish",
	});
}

export default Component;
