import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbghdpbaf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbghdpbaf"/>`,
		"fallback": "map:rv-park",
	});
}

export default Component;
