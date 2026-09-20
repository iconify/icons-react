import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmp5x0bgg.css';
import '../../css/k/kqqve2g3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmp5x0bgg"/><path class="kqqve2g3f"/>`,
		"fallback": "prime:sort-amount-up-alt",
	});
}

export default Component;
