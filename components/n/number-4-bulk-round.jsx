import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdn7b7brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdn7b7brg"/>`,
		"fallback": "coolicons:number-4-bulk-round",
	});
}

export default Component;
