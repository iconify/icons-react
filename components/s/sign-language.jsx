import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wom0nulsq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wom0nulsq"/>`,
		"fallback": "map:sign-language",
	});
}

export default Component;
