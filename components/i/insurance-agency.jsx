import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccbd5bcee.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccbd5bcee"/>`,
		"fallback": "map:insurance-agency",
	});
}

export default Component;
