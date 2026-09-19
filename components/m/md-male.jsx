import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quhl277kk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quhl277kk"/>`,
		"fallback": "ion:md-male",
	});
}

export default Component;
