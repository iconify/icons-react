import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgkw-vbvi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgkw-vbvi"/>`,
		"fallback": "temaki:shrub-low",
	});
}

export default Component;
