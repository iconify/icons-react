import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swzpzlbdr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swzpzlbdr"/>`,
		"fallback": "pinhead:phone-down-above-six-one-one",
	});
}

export default Component;
