import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj08ygdiz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj08ygdiz"/>`,
		"fallback": "pinhead:squat-rock",
	});
}

export default Component;
