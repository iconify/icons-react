import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3vgmfb8g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3vgmfb8g"/>`,
		"fallback": "map:liquor-store",
	});
}

export default Component;
