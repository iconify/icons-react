import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghy9vobgd.css';
import '../../css/b/bqzzynbfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghy9vobgd"/><path class="bqzzynbfg"/>`,
		"fallback": "ion:ios-flask-outline",
	});
}

export default Component;
