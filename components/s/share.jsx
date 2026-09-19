import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9u0zxhna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9u0zxhna"/>`,
		"fallback": "icon-park-outline:share",
	});
}

export default Component;
