import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lznnucceq.css';
import '../../css/m/muuvzwbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lznnucceq"/><path class="muuvzwbbg"/>`,
		"fallback": "stash:search-split-duotone",
	});
}

export default Component;
