import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cetnc8bas.css';
import '../../css/d/d2kx6_b8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cetnc8bas"/><path class="d2kx6_b8f"/>`,
		"fallback": "ion:md-information",
	});
}

export default Component;
