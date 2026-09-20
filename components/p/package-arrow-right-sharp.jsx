import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsf1w7y6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsf1w7y6h"/>`,
		"fallback": "keyline-icons:package-arrow-right-sharp",
	});
}

export default Component;
