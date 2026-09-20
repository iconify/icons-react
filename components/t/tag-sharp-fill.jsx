import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cagsbz8vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cagsbz8vg"/>`,
		"fallback": "keyline-icons:tag-sharp-fill",
	});
}

export default Component;
