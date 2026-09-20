import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhq0jyybt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhq0jyybt"/>`,
		"fallback": "pinhead:pixel-person",
	});
}

export default Component;
