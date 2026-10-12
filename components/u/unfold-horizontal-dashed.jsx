import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu1mdbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu1mdbbp"/>`,
		"fallback": "andrsrxn:unfold-horizontal-dashed",
	});
}

export default Component;
