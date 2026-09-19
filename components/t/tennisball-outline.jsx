import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnii4hccr.css';
import '../../css/f/f345gcb6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rnii4hccr"/><path class="f345gcb6t"/>`,
		"fallback": "ion:tennisball-outline",
	});
}

export default Component;
