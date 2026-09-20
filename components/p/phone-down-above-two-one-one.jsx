import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7jt5ebyc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7jt5ebyc"/>`,
		"fallback": "pinhead:phone-down-above-two-one-one",
	});
}

export default Component;
