import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6bnuccvg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6bnuccvg"/>`,
		"fallback": "radix-icons:track-next",
	});
}

export default Component;
