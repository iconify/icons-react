import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-alcbvt.css';
import '../../css/z/z2347ac7w.css';
import '../../css/m/mn75_48em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr-alcbvt"/><path class="z2347ac7w"/><path class="mn75_48em"/>`,
		"fallback": "token:sc",
	});
}

export default Component;
