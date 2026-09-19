import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6j0uvbgv.css';
import '../../css/y/y7cjcccww.css';
import '../../css/u/u-6-7yubm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6j0uvbgv"/><path class="y7cjcccww"/><path class="u-6-7yubm"/>`,
		"fallback": "devicon:vertx-wordmark",
	});
}

export default Component;
