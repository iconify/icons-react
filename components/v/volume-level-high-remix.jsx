import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh9i4cu6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh9i4cu6t"/>`,
		"fallback": "streamline-flex:volume-level-high-remix",
	});
}

export default Component;
