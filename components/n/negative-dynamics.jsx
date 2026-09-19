import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv26y9bqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv26y9bqo"/>`,
		"fallback": "icon-park-outline:negative-dynamics",
	});
}

export default Component;
