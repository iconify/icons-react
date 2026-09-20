import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr2ei4_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr2ei4_io"/>`,
		"fallback": "stash:shrink-diagonal-duotone",
	});
}

export default Component;
