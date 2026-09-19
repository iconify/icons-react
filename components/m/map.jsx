import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhok3cb9s.css';
import '../../css/o/ob_nbubvj.css';
import '../../css/m/m2huwebvz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhok3cb9s"/><circle class="ob_nbubvj"/><path class="m2huwebvz"/>`,
		"fallback": "carbon:map",
	});
}

export default Component;
