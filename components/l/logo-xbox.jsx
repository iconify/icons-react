import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8knpm-go.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8knpm-go"/>`,
		"fallback": "famicons:logo-xbox",
	});
}

export default Component;
