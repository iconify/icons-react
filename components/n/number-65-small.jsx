import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkger6gry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkger6gry"/>`,
		"fallback": "tabler:number-65-small",
	});
}

export default Component;
